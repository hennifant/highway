import styled from 'styled-components';
import Header from '../components/Header.js';
import NavigationBar from '../components/NavigationBar.js';

export default function Highway() {
  return (
    <PageContainer>
      <Header />
      <StartContainer>
        <StartInstructions>
          <ClickToStart>Click here to start the game</ClickToStart>
          <p>Instruction: </p>
          <p>
            Use Arrow keys to navigate the car. If you hit any car the game will
            end
          </p>
        </StartInstructions>
      </StartContainer>
      <NavigationBar />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
`;

const StartContainer = styled.section`
  display: grid;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0px 20px 0px 20px;
  color: yellow;
  text-align: center;
`;

const StartInstructions = styled.div`
  width: 500px;
  height: 107px;
  line-height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  margin: auto;
  background-color: rgb(43, 205, 226);
  text-align: center;
  border-bottom: 2px solid rgb(132, 197, 197);
`;

const ClickToStart = styled.p`
  cursor: pointer;
`;
