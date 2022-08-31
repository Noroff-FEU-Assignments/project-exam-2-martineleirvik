import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #5B5B5B;
}
body {
  font-family: 'Inter', sans-serif;
  font-weight: light;
  background-color: #ebebeb;
}
h1 {
  font-family: 'Merriweather', serif;
}
button {
  background-color: #EB8C6A;
  border: none;
  padding: 5px 15px;
  border-radius: 8px;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
}
a {
  color: black;
}

`;

export default GlobalStyle;
