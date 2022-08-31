import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          HOLIDAZE
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;

// Styled Components

const StyledNav = styled.nav`
  background-color: #eec2b3;
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
`;
