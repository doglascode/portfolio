import { StyledRepository, TagsContainer } from './styles';
import LinkButton from '../LinkButton';

export default function Repository({ repository }) {
  const { name, description, topics, html_url, homepage } = repository;

  return (
    <StyledRepository>
      <div className="info">
        <a href={html_url}>
          <h3>{name.replace(/-/g, ' ')}</h3>
        </a>

        {description && <p>{description}</p>}

        {topics && topics.length > 0 && (
          <TagsContainer>
            {topics.map(tag => <li key={tag}>{tag}</li>)}
          </TagsContainer>
        )}
      </div>

      <div className="actions">
        <LinkButton href={html_url}>GitHub</LinkButton>
        {homepage && (
          <LinkButton href={homepage}>Website</LinkButton>
        )}
      </div>
    </StyledRepository>
  );
}
