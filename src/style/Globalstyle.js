import { createGlobalStyle } from "styled-components";
import PretendardMedium from '../assets/font/Pretendard-Medium.otf';
import PretendardRegular from '../assets/font/Pretendard-Regular.otf';
import PretendardSemiBold from '../assets/font/Pretendard-SemiBold.otf';

const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PretendardMedium";
  }

  body {
    background: pink;
  }


  @font-face{
    font-family: "PretendardRegular";
    src: url('./Pretendard-Regular.otf');
  
    font-weight: 400;
    font-style: normal
  }

  @font-face{
    font-family: "PretendardMedium";
    src: local('Pretendard-Medium'), format('otf');
    
    font-weight: 500;
    font-style: normal
  }

  @font-face{
    font-family: "PretendardSaemiBold";
    src: url('./Pretendard-SemiBold.otf');
    
    font-weight: 600;
    font-style: normal
  }
`

export default Globalstyle;