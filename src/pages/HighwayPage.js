import styled from 'styled-components';
import Header from '../components/Header.js';

export default function Highway() {
  return (
    <PageContainer>
      <Header />
      <HighwayContainer></HighwayContainer>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: grid;
  grid-template-rows: 48px 1fr;
  height: 100vh;
`;

const HighwayContainer = styled.section`
  display: grid;
  gap: 12px;
  overflow-y: auto;
`;
