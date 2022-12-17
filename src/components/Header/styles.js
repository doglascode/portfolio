import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;

  .header-container {
    align-items: center;
    background: #252525;
    display: flex;
    padding: 0 50px;
    justify-content: space-between;
    height: 60px;
    line-height: 0;
  }

  .menu-toggle {
    color: #FFFFFF;
    display: none;
    font-size: 24px;

    input {
      cursor: pointer;
      width: 24px;
      position: absolute;
      height: 24px;
      opacity: 0;
    }

    @media screen and (max-width: 980px) {
      display: block;
    }
  }
`;

export const HeaderNavigation = styled.ul`
  display: flex;
  list-style: none;

  li {
    position: relative;

    a {
      color: #FFFFFF;
      border-radius: 4px;
      display: inline-block;
      font-size: 15px;
      padding: 10px 15px;
      line-height: 1;
      transition: background-color .1s ease-in;

      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }

      @media screen and (max-width: 980px) {
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 980px) {
    background-color: #202020;
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    padding: 25px;
    width: 100%;
    transition: opacity .2s ease-in;
    opacity: ${props => props.menuIsOpen ? 1 : 0};
    visibility: ${props => props.menuIsOpen ? 'visible' : 'hidden'};
  }
`;
