import styled from "styled-components";

export const StyledBookingContainer = styled.div`
  margin: 0 50px 50px 50px;
  @media (max-width: 480px) {
    margin: 0 20px;
  }
`;

export const StyledFilterBtnsContainer = styled.div`
  margin: 15px 0 15px 50px;

  @media (max-width: 480px) {
    margin: 10px;
  }
`;

export const StyledFilterBtn = styled.button`
  cursor: pointer;
  margin: 5px 2px;
  background-color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.secondaryColor};
  color: ${(props) =>
    props.isActive ? props.theme.secondaryColor : props.theme.white};
  :hover {
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.secondaryColor};
  }
  .active {
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.secondaryColor};
  }
`;
