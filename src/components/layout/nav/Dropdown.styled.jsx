import styled from "styled-components";

export const StyledDropdown = styled.ul`
  width: 200px;
  position: absolute;
  top: 10vh;
  list-style: none;
  text-align: start;
  li {
    background-color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.secondaryColor};
    }
  }
  .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    padding: 15px;
  }
`;
