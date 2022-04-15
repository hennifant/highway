import styled from 'styled-components';

export default function Road() {
  return <Street></Street>;
}

const Street = styled.div`
  height: 100vh;
  width: 400px;
  margin: auto;
  position: relative;
  background-color: rgb(32, 32, 32);
  overflow: hidden;
  border-left: 4px dashed white;
  border-right: 4px dashed white;
`;
