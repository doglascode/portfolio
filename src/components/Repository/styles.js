import styled from 'styled-components';

export const StyledRepository = styled.div`
  background-color: #202020;
  border-radius: 10px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 25px;
  font-family: "Hanken Grotesk", sans-serif;
  width: 32.15%;

  @media screen and (max-width: 980px) {
    width: 100%;
  }

  h3 {
    font-size: 18px;
    text-transform: capitalize;
  }

  p {
    margin-top: 10px;
    color: #9f9f9f;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;

    a {
      width: 100%;
    }
  }
`;

export const TagsContainer = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  list-style: none;
  margin-top: 10px;

  li {
    color: #9f9f9f;
    display: inline-block;
    border: 1px solid currentColor;
    border-radius: 4px;
    padding: 2px 5px;
    font-size: 13px;
  }
`;
