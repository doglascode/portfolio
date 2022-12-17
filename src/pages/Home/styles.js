import styled, { keyframes } from 'styled-components';

const showText = keyframes`
  0% {
    border-color: transparent;
    transform: translateX(-10%);
    opacity: 0;
  } 100% {
    border-color: #ff8d00;
    transform: none;
    opacity: 1;
  }
`;

const popUp = keyframes`
  0% {
    transform: scale(0);
  } 70% {
    transform: scale(1.1);
  } 100% {
    trasnform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;

  .info {
    padding: 10px;
    max-width: 550px;

    h1 {
      animation: ${showText} .9s cubic-bezier(0.88, 0.01, 0.15, 1);
      border-left: 2px solid #ff8d00;
      padding-left: 20px;
    }

    p {
      animation: ${showText} .9s cubic-bezier(0.88, 0.01, 0.15, 1);
      margin-top: 20px;
    }

    .social-link {
      animation: ${popUp} .4s ease-in;
      opacity: .6;
      transition: opacity .1s ease-in;

      &:hover {
        opacity: 1;
      }
    }

    button {
      margin-top: 20px;
    }
  }
`;
