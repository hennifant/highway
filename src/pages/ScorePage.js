import styled from 'styled-components';
import Header from '../components/Header.js';
import NavigationBar from '../components/NavigationBar.js';
import Score from '../components/Score.js';

export default function Highway() {
  return (
    <PageContainer>
      <Header />
      <HighwayContainer>
        <Score />
      </HighwayContainer>
      <NavigationBar />
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
`;

const HighwayContainer = styled.section`
  display: grid;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0px 20px 0px 20px;
  color: yellow;
  text-align: center;
`;
