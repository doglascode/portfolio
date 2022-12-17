import styled from 'styled-components';

export const Container = styled.div`
  max-width: 550px;
`;

export const TextGroup = styled.div`
  .details, ul {
    margin-top: 20px;
  }

  & + & {
    margin-top: 60px;
  }

  p + p {
    margin-top: 10px;
  }

  ul {
    &.list {
      padding-left: 20px;

      li {
        cursor: default;
        margin-bottom: 10px;

        &::marker {
          content: "\u00BB  ";
          color: #ff8d00;
          font-size: 17px;
        }
      }
    }
  }
`;
