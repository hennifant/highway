import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --black:
}

body { 
  font-family: 'Lucida Grande', sans-serif;
  font-size: 1rem;
  background: linear-gradient(
    to bottom right, #87cf8e, #b8cf87
  )
}
`;
