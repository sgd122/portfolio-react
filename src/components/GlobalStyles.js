import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
   ${reset};
   * > body,
   * > body * {
      font-family: 'Noto Sans KR', 'Roboto', sans-serif !important;
      font-size: 3rem;
       padding:0;
       margin:0;C
   }
   a{
       text-decoration:none;
       color:inherit;
   }
   *{
       box-sizing:boerder-box;
   }
   li, dt, dd {
      list-style:none;
   }
`;

export default GlobalStyles;
