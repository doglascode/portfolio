import { useState } from 'react';
import { Link } from 'react-router-dom';

import { RiCloseFill, RiMenuFill } from 'react-icons/ri';
import { StyledHeader, HeaderNavigation } from './styles';

const navigationList = [
  { title: 'Página Inicial', path: '/' },
  { title: 'Sobre Mim', path: '/sobre-mim' },
  { title: 'Projetos', path: '/projetos' }
];

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleToggleMenu() {
    setMenuIsOpen(prevState => !prevState);
  }

  return (
    <StyledHeader>
      <div className="header-container">
        <Link to="/" className="logo">
          <span>doglasCode</span>
        </Link>

        {navigationList.length > 0 && (
          <div className="navigation">
            <div className="menu-toggle">
              <input type="checkbox" onInput={handleToggleMenu} />
              {menuIsOpen ? <RiCloseFill /> : <RiMenuFill />}
            </div>

            <HeaderNavigation menuIsOpen={menuIsOpen}>
              {navigationList.map(item => (
                <li key={item.title} onClick={handleToggleMenu}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </HeaderNavigation>
          </div>
        )}
      </div>
    </StyledHeader>
  );
}
