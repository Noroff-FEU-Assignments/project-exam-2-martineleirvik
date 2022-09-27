import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
  max-height: 460px;
  object-fit: cover;
`;

export const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledVisitBergen = styled.div`
  margin: 50px auto;
  text-align: center;
  margin: 0 0 10px 0;

  p,
  button {
    margin: 10px 0;
  }
`;

export const StyledVideo = styled.video`
  max-height: 400px;
  width: 100%;
  object-fit: cover;
`;
