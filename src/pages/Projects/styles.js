import styled from 'styled-components';

export const Container = styled.div`

  h1 {
    margin-bottom: 10px;
  }

  .repositories {
    align-items: center;
    display: flex;
    justify-content: center;

    .repo-item + .repo-item {
      margin-left: 10px;
    }
  }
`;

export const RepositoriesContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;
