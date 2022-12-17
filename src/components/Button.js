import styled from 'styled-components';

export default styled.button`
  background-color: #ff9800;
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-family: inherit;
  font-weight: bold;
  padding: 12px 15px;
  transition: background-color .2s ease-in, color .2s ease-in;

  &:hover {
    background-color: #000000;
    color: #ff9800;
  }
`;
