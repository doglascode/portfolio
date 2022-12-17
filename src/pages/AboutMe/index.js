import { Container, TextGroup } from './styles';

import SocialGroup from '../../components/SocialGroup';

export default function AboutMe() {
  return (
    <Container>
      <TextGroup>
        <h1>Sobre Mim</h1>

        <div className="details">
          <p>
            Meu nome é Walison Douglas.
            Sou um programador front-end.
          </p>
          <p>
            Meu primeiro contato com código foi aos meus 14 anos, quando
            descobri a DevTools do Chrome. Achei bem interssante mesmo não
            entendendo nada dos elementos e estilos. Aos meus 17 anos conheci
            o JavaScript e decidi estudá-lo.
          </p>
          <p>
            Atualmente tenho 18 anos e estou à procura de uma
            oportunidade de trabalho.
          </p>
        </div>
      </TextGroup>

      <TextGroup>
        <h1>Habilidades</h1>

        <ul className="list">
          <li>Git</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
        </ul>

        <p>Você pode ver alguns projetos acessando a aba Projetos</p>
      </TextGroup>

      <TextGroup>
        <h1>Contato</h1>

        <SocialGroup />
      </TextGroup>
    </Container>
  );
}
