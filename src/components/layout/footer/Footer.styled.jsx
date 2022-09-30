import styled from "styled-components";

export const StyledFooter = styled.div`
  margin-top: auto;
  background-color: ${(props) => props.theme.footer};
  padding: 50px 0;
  .copyright {
    text-align: center;
    color: ${(props) => props.theme.black};
  }
`;

export const StyledIcons = styled.div`
  margin: 10px 0;
  text-align: center;
  img {
    width: 35px;
    color: red;
    cursor: pointer;
  }
`;
