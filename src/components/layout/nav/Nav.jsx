import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//components
import Search from "../search/Search";
import AuthContext from "../../context/AuthContext";
import { NavButton } from "./NavButton";
import Dropdown from "./Dropdown";
// styles
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  console.log("auth", auth);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <StyledNav>
      <h1>
        <Link to="/" className="navbar-logo">
          HOLIDAZE
        </Link>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fa fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Search />
        </li>
        <li className="nav-item">
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" onClick={closeMobileMenu}>
            Booking
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" onClick={closeMobileMenu}>
            Contact us
          </Link>
        </li>
        {auth ? (
          <>
            <li className="nav-item">
              Admin <i className="fas fa-caret-down"></i>
            </li>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <li className="nav-item">
            <Link to="/login">Login</Link>
            {dropdown && <Dropdown />}
          </li>
        )}
      </ul>
    </StyledNav>
  );
}

export default Navigation;

// Styled Components

const StyledNavBar = styled.nav``;

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin: auto;
  a {
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 1rem;
    font-size: 0.8rem;
  }
  button {
    font-size: 0.8rem;
    margin-left: 8px;
  }
  i {
    color: white;
    font-size: 1.5rem;
  }
  .nav-item {
    align-items: center;
  }
`;
