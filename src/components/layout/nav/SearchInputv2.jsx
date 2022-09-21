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
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      hover={showSearchInput}
    >
      <StyledInput ref={targetRef} showSearchInput={showSearchInput} />
    </Container>
  );
}

export default SearchInputv2;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 500px;
  border: 4px solid ${(props) => props.theme.secondaryColor};
  padding: 5px;
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
    `}
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  border-radius: 20px;
  margin: 0;
  appearance: none;
  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;
