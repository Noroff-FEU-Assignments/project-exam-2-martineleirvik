import { useState, useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { baseUrl } from "../../../constants/api";
import axios from "axios";
import * as S from "./SearchInput.styled";

function SearchInput() {
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
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = bookings.filter((booking) => {
        const regex = new RegExp(`${text}`, "gi");
        return booking.attributes.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <S.Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      hover={showSearchInput}
    >
      <S.StyledInput
        ref={targetRef}
        showSearchInput={showSearchInput}
        placeholder="Search"
        onChange={(e) => onChangeHandler(e.target.value.toLocaleLowerCase())}
        value={text}
      />
      <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
      <S.StyledSearchResult>
        {suggestions &&
          suggestions.map((search) => (
            <div>
              <Link to={`/booking/${search.id}`}>
                <div key={search.id}>{search.attributes.name}</div>
              </Link>
            </div>
          ))}
      </S.StyledSearchResult>
    </S.Container>
  );
}

export default SearchInput;
