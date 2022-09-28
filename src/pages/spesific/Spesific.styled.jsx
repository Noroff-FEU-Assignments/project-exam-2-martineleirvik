import styled from "styled-components";

export const StyledBookingDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

export const StyledRow = styled.div`
  display: flex;
`;

export const StyledImage = styled.div`
  width: 50%;
  img {
    width: 400px;
    height: 270px;
    object-fit: cover;
  }
`;

export const StyledInfo = styled.div`
  width: 50%;
  margin-left: 40px;
  h1,
  p {
    margin: 20px 0;
  }
  .category {
    font-style: italic;
  }
`;

export const StyledDesc = styled.div`
  margin: 30px 0;
  max-width: 600px;
`;
