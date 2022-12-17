import styled, { keyframes } from 'styled-components';

const load = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  animation: ${load} .6s linear infinite;
  border: 3px solid transparent;
  border-right-color: #ff8d00;
  border-radius: 50%;
  display: inline-block;
  height: 80px;
  width: 80px;
`;
