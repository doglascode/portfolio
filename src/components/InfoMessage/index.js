import { IoMdCloseCircle } from 'react-icons/io';
import { HiExclamation } from 'react-icons/hi';
import { Container } from './styles';

import Button from '../Button';
import LinkButton from '../LinkButton';

export default function ErrorMessage(props) {
  function handleTryAgain() {
    window.location.reload();
  }

  return (
    <Container>
      {props.error ? (
        <>
          <IoMdCloseCircle />

          <div className="details">
            <h1>{props.message}</h1>
            <Button onClick={handleTryAgain}>Recarregar Página</Button>
          </div>
        </>
      ) : (
        <>
          <HiExclamation />

          <div className="details">
            <h1>{props.message}</h1>
            <LinkButton href="/">Página Inicial</LinkButton>
          </div>
        </>
      )}
    </Container>
  );
}
