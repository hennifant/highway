import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import HighwayPage from './pages/HighwayPage.js';
import ScorePage from './pages/ScorePage.js';
import StartPage from './pages/StartPage.js';

function App() {
  return (
    <AppContainer>
      <PageContainer>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<HighwayPage />} />
          <Route path="/score" element={<ScorePage />} />
        </Routes>
      </PageContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`;

const PageContainer = styled.main`
  padding-bottom: 40px;
`;
