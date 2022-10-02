import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  margin: 10px;
  border: 1px solid #eb8c6a;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-width: 200px;
  max-width: 300px;
  height: 360px;
  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
`;

export const StyledCardText = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  h3 {
    margin: 10px 0;
    height: 35px;
  }
  .desc {
    height: 100px;
  }
`;

export const StyledButtons = styled.div`
  margin: 10px 0;
  justify-content: flex-end;
  button {
    margin-right: 12px;
    font-size: 0.8rem;
  }
  .readmore {
    font-size: 0.8rem;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
    svg {
      font-size: 0.7rem;
    }
  }
`;
