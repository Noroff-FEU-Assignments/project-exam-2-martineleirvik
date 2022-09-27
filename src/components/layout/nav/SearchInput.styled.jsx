import styled, { css } from "styled-components";

export const Container = styled.div`
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

export const StyledInput = styled.input`
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

export const StyledSearchResult = styled.div`
  position: absolute;
  width: 100%;
  max-height: 250px;
  top: 33px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  border: 2px solid ${(props) => props.theme.primaryColor};
  overflow-y: scroll;
  div {
    margin: 5px 0;
    padding-left: 5px;
    text-align: left;
    z-index: 1;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #b4b4b4;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #787878;
  }
`;
