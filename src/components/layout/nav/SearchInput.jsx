import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { baseUrl } from "../../../constants/api";
import axios from "axios";

const url = baseUrl + "bookings?populate=*";

function SearchInput() {
  const [showInput, setShowInput] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        const results = response.data;
        console.log("search results", results);
        setBookings(results.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const onChange = (inputText) => {
    let searchResult = [];
    if (inputText.length > 0) {
      searchResult = bookings.filter((booking) => {
        const regex = new RegExp(`${inputText}`);
        return booking.attributes.name.match(regex);
      });
    }
    setSearchResult(searchResult);
    setQuery(inputText);
  };

  const handleClick = (event) => {
    setShowInput((current) => !current);
  };

  return (
    <StyledContainer>
      {showInput && (
        <input
          type="text"
          placeholder="Search accomodation"
          onChange={(event) => onChange(event.target.value.toLowerCase())}
          value={query}
          onBlur={() => {
            setTimeout(() => {
              setSearchResult([]);
              setQuery("");
            }, 100);
          }}
        />
      )}
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>

      {searchResult.map((result) => {
        return (
          <Link to={`/booking/${result.id}`}>
            <div key={result.id}>{result.attributes.name}</div>
          </Link>
        );
      })}
    </StyledContainer>
  );
}

export default SearchInput;

const StyledContainer = styled.div`
  width: 100%;
  input {
    border: 2px solid ${(props) => props.theme.secondaryColor};
    padding: 2px;
    border-radius: 15px;
  }
  input:focus {
    border: 2px solid ${(props) => props.theme.secondaryColor};
  }
  button {
    background-color: ${(props) => props.theme.primaryColor};
    border: none;
    padding: 0;
    margin: 0 10px 0 0;
    :hover {
      cursor: pointer;
    }
    path {
      color: white;
      font-size: 1.2rem;
    }
  }
`;
