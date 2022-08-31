import styled from "styled-components";

function Heading({ heading }) {
  return <StyledHeading>{heading}</StyledHeading>;
}

export default Heading;

// Styled components

const StyledHeading = styled.h1`
  text-align: center;
`;
