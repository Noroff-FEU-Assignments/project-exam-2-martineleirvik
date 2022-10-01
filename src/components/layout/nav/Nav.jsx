import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import AuthContext from "../../context/AuthContext";
import SearchInput from "./SearchInput";
import * as S from "./Nav.styled";

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
    <S.StyledNavBar>
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        HOLIDAZE
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item search">
          <SearchInput />
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
                  Enquiries
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
    </S.StyledNavBar>
  );
}

export default Navbar;
