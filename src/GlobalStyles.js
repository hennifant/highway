import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing: border-box;
}

body { 
  font-family: 'Lucida Grande', sans-serif;
  background: linear-gradient(
    to bottom right, #87cf8e, #b8cf87
  )
}
`;
