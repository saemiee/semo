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

  @font-face{
    font-family: "Pretendard-Regular";
    src: url('./Pretendard-Regular.otf');
  
    font-weight: 400;
  }

  @font-face{
    font-family: "Pretendard-Medium";
    src: local('Pretendard-Medium'), format('otf');
    
    font-weight: 500;
    font-style: normal
  }

  @font-face{
    font-family: "Pretendard-SaemiBold";
    src: url('./Pretendard-SemiBold.otf');
    
    font-weight: 600;
  }
`

export default Globalstyle;