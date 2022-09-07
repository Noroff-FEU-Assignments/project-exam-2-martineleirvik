import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropMenuItems } from "./DropMenuItems";
import styled from "styled-components";

function Dropdown() {
  return (
    <>
      <StyledDropdown>
        {DropMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.className} to={item.path}>
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
  .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    padding: 15px;
  }
`;
