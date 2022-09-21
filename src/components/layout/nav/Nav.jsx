import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import AuthContext from "../../context/AuthContext";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import SearchInputv2 from "./SearchInputv2";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 800) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 800) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    closeMobileMenu();
    navigate("/");
  }

  return (
    <StyledNavBar>
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        HOLIDAZE
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item search">
          <SearchInputv2 />
          {/* <SearchInput /> */}
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-links" onClick={closeMobileMenu}>
            Booking
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
        {auth ? (
          <>
            <li
              id="desktop-dropdown"
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <p className="nav-links">
                Admin <i className="fas fa-caret-down" />
              </p>
              {dropdown && <Dropdown />}
            </li>
            <div className="mobile-dropdown">
              <li className="nav-item">
                <Link
                  to="/listenquiry"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Enquries
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/listmessage"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Messages
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/newestablishment"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  New establishment
                </Link>
              </li>
            </div>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </StyledNavBar>
  );
}

export default Navbar;

const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  .fa-bars {
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
  }
  .fa-caret-down {
    color: ${(props) => props.theme.white};
  }
  .menu-icon {
    display: none;
  }
  .navbar-logo {
    font-family: "Merriweather", serif;
    color: ${(props) => props.theme.white};
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
  }
  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    width: 80vw;
    justify-content: flex-end;
    margin-right: 2rem;
    align-items: center;
    button {
      cursor: pointer;
      align-items: center;
      height: 2rem;
      font-size: 0.9rem;
      margin-left: 5px;
    }
    .icon {
      color: ${(props) => props.theme.white};
      padding: 0.5rem;
      :hover {
        cursor: pointer;
      }
    }
    .nav-item {
      display: flex;
      align-items: center;
      height: 10vh;
      .nav-links {
        color: ${(props) => props.theme.white};
        text-decoration: none;
        padding: 0.5rem;
        :hover {
          background-color: ${(props) => props.theme.secondaryColor};
          transition: all 0.2s ease-out;
        }
      }
    }
    .nav-item.search {
      width: 25%;
      justify-content: end;
    }
    .mobile-dropdown {
      display: none;
    }
  }

  @media (max-width: 800px) {
    min-height: 10vh;
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
    .fa-times {
      color: ${(props) => props.theme.white};
    }
    .navbar-logo {
      position: absolute;
      top: 1rem;
      left: 0;
      transform: translate(25%, 50%);
    }
    .nav-menu {
      background-color: ${(props) => props.theme.primaryColor};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 10vh;
      left: -100%;
      z-index: 2;
      transition: all 0.5s ease;
      .mobile-dropdown {
        display: block;
        width: 100%;
      }
      #desktop-dropdown {
        display: none;
      }
      .nav-item {
        width: 100%;
      }
      .nav-item.search {
        margin-left: -20%;
      }
      .icon {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
      }
      .nav-links {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        :hover {
          background-color: ${(props) => props.theme.secondaryColor};
          border-radius: 0;
        }
      }
    }
    .nav-menu.active {
      background-color: ${(props) => props.theme.primaryColor};
      left: 0;
      transition: all 0.5s ease;
      z-index: 2;
    }
  }
`;
