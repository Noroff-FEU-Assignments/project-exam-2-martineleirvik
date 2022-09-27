import styled from "styled-components";

export const StyledMessage = styled.div`
  margin: 7px auto;
  padding: 4px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  li {
    font-weight: bold;
    width: 50%;
    list-style-type: circle;
  }
  .createdAt {
    width: 45%;
  }
  .arrow-down {
    width: 5%;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  } ;
`;

export const StyledMessageExpanded = styled.div`
  p {
    margin: 10px 0;
    span {
      font-weight: bold;
    }
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  } ;
`;
