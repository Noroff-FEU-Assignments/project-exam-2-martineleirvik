import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.footer};
  padding: 50px 0;
  .copyright {
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`;