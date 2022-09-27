import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropMenuItems } from "./DropMenuItems";
import { StyledDropdown } from "./Dropdown.styled";

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
