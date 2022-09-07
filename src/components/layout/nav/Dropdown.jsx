import React, { useState } from "react";
import { DropMenuItems } from "./DropMenuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <StyledDropdown
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {DropMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </StyledDropdown>
    </>
  );
}

export default Dropdown;

const StyledDropdown = styled.ul`
  width: 200px;
  position: absolute;
  top: 8vh;
  list-style: none;
  text-align: start;
  li {
    background-color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.secondaryColor};
    }
  }
  .clicked {
    display: none;
  }
  .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
  }
`;
