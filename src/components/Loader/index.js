import ReactDOM from 'react-dom';

import { LoaderContainer } from './styles';
import Spinner from '../Spinner';

export default function Loader() {
  return ReactDOM.createPortal(
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>,
    document.getElementById('page-overlay')
  );
}
