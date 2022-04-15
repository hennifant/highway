import styled from 'styled-components';

export default function Header() {
  return <Heading>Highway</Heading>;
}

const Heading = styled.h1`
  color: red;
  font-family: Monospace;
  font-size: 28px;
  height: 100%;
  background: linear-gradient(to bottom right, #333333, #121212);
  align-self: center;
  text-align: center;
  margin: 0px;
`;
