import { Container } from './styles';

import { HiMail } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function SocialGroup() {
  return (
    <Container>
      <a href="https://github.com/doglascode" className="social-link">
        <AiFillGithub />
      </a>
      <a href="mailto:walisondouglas30@gmail.com" className="social-link">
        <HiMail />
      </a>
      <a href="https://www.linkedin.com/in/doglascode/" className="social-link">
        <AiFillLinkedin />
      </a>
    </Container>
  );
}
