import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import AuthContext from "../../context/AuthContext";
import styled from "styled-components";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
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
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <p className="nav-links">
                Admin <i className="fas fa-caret-down" />
              </p>
              {dropdown && <Dropdown />}
            </li>
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
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  .fa-bars {
    color: ${(props) => props.theme.white};
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
    font-size: 1.2rem;
  }
  .nav-menu {
    display: flex;

    grid-gap: 6px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: flex-end;
    margin-right: 2rem;
    align-items: center;
    button {
      cursor: pointer;
      align-items: center;
      height: 2rem;
      font-size: 0.9rem;
    }
    .nav-item {
      display: flex;
      align-items: center;
      height: 8vh;
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
  }

  @media (max-width: 960px) {
    position: relative;

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
      font-size: 2rem;
    }
    .navbar-logo {
      position: absolute;
      top: 0.8rem;
      left: 0;
      transform: translate(25%, 50%);
    }
    .nav-menu {
      background-color: ${(props) => props.theme.primaryColor};
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 92vh;
      position: absolute;
      top: 8vh;
      left: -100%;
      z-index: 2;
      transition: all 0.5s ease;

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
      justify-content: flex-start;
      transition: all 0.5s ease;
      z-index: 2;
    }
  }
`;
