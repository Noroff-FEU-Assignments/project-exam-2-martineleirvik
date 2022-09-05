import { useState, useRef } from "react";

function Search() {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  return (
    <>
      <div className="search-container">
        <input type="text" />
      </div>
    </>
  );
}

export default Search;
