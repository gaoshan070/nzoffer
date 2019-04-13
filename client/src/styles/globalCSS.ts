import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    font-family: "San Francisco","Lucida Grande","Lucida Sans Unicode","helvetica neue",Verdana,tahoma,Aril,PingFangSC-Light,"hiragino sans gb",STXihei,"华文细黑","WenQuanYi Micro Hei","Microsoft YaHei UI","Microsoft YaHei","微软雅黑",Heiti,"黑体",sans-serif;
    width: 100%;
    background-color: #EDEEEF;
  }
`;

export default GlobalCSS;
