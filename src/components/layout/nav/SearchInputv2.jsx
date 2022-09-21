import { useState, useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { baseUrl } from "../../../constants/api";
import axios from "axios";

function SearchInputv2() {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(baseUrl + "bookings");
        const results = response.data.data;
        setBookings(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    targetRef.current.value = "";
  }, [showSearchInput]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = bookings.filter((booking) => {
        const regex = new RegExp(`${text}`, "gi");
        return booking.attributes.name.match(regex);
      });
    }
    console.log(matches);
    setSuggestions(matches);
    setText(text);
  };

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <StyledInput
        ref={targetRef}
        showSearchInput={showSearchInput}
        placeholder="Search"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
            text("");
          }, 100);
        }}
      />
      <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
      <div className="search-result">
        {suggestions &&
          suggestions.map((search) => (
            <StyledSearchContainer>
              <Link className="search-dropdown" to={`/booking/${search.id}`}>
                <div key={search.id} className="search-result-container">
                  {search.attributes.name}
                </div>
              </Link>
            </StyledSearchContainer>
          ))}
      </div>
    </Container>
  );
}

export default SearchInputv2;

const StyledSearchContainer = styled.div`
  .search-result-container {
  }
`;

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
