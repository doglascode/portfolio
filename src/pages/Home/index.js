import { Link } from 'react-router-dom';

import { Container } from './styles';
import SocialGroup from '../../components/SocialGroup';
import Button from '../../components/Button';

export default function Home() {
  return (
    <Container>
      <div className="info">
        <h1>Olá, Eu me chamo Walison Douglas</h1>
        <p>Desenvolvedor Web Front End</p>

        <SocialGroup />

        <Link to="/sobre-mim">
          <Button type="button">Mais Informações</Button>
        </Link>
      </div>
    </Container>
  );
}
