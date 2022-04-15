import styled from 'styled-components';

export default function Score() {
  return <Highscore></Highscore>;
}

const Highscore = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  text-align: center;
  background-color: rgb(100, 224, 156);
  width: 200px;
  color: rgb(59, 40, 40);
  line-height: 40px;
  border-radius: 4px;
  font-size: 1.2em;
`;
