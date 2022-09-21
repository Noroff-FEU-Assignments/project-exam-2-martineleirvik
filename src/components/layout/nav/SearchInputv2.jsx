import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { useEffect } from "react";

function SearchInputv2() {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <StyledInput ref={targetRef} showSearchInput={showSearchInput} />
      <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
    </Container>
  );
}

export default SearchInputv2;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border-radius: 500px;
  background: ${(props) => props.theme.primaryColor};
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ hover }) =>
    hover &&
    css`
      width: 100%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border: 2px solid ${(props) => props.theme.secondaryColor};
    `}
  path {
    color: ${(props) => props.theme.white};
    z-index: 10;
    &:hover {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  outline: 0;
  border: 0;
  border-radius: 20px;
  margin: 0;
  padding-left: 20px;
  appearance: none;
  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;
