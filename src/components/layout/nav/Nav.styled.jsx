import styled from "styled-components";

export const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  min-height: 80px;
  height: 10vh;
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
        margin-bottom: 0;
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
