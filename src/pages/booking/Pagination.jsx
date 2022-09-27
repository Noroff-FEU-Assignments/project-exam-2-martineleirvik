import React from "react";
import styled from "styled-components";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <StyledPagination>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </StyledPagination>
    </>
  );
}

export default Pagination;

const StyledPagination = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  button {
    margin: 0 5px;
  }
`;
