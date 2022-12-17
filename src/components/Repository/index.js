import { StyledRepository, TagsContainer } from './styles';
import LinkButton from '../LinkButton';

export default function Repository({ repository }) {
  const { name, description, topics, html_url } = repository;

  const websiteUrl = `https://doglascode.github.io/${name}`;

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
        {!description.toLowerCase().includes('react') && (
          <LinkButton href={websiteUrl}>Website</LinkButton>
        )}
      </div>
    </StyledRepository>
  );
}
