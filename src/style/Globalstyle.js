import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFFFFF;
  }

  button {
    cursor: pointer;
    
    width: 152px;
    height: 56px;

    box-shadow: 0px 8px 20px 0px #113A02;
    background: #829679;
  }
`

export default Globalstyle;