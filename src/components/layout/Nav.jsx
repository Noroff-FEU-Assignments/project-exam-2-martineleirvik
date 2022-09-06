import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//components
import Search from "./search/Search";
import AuthContext from "../context/AuthContext";
// styles
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);
  console.log("auth", auth);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          HOLIDAZE
        </Link>
      </h1>
      <ul>
        <li>
          <Search />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        {auth ? (
          <>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
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
  }
  button {
    font-size: 0.8rem;
    margin-left: 8px;
  }
`;
