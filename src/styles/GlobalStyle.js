import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
}
body {
  font-family: 'Inter', sans-serif;
  font-weight: light;
  background-color: ${(props) => props.theme.backgroundColor};
}
h1 {
  font-family: 'Merriweather', serif;
}
button {
  background-color: ${(props) => props.theme.secondaryColor};
  border: none;
  padding: 5px 15px;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
}
a {
  color: ${(props) => props.theme.black};
}

`;

export default GlobalStyle;
