import { useState, useEffect } from 'react';

import { Container, RepositoriesContainer } from './styles';

import Repository from '../../components/Repository';
import Loader from '../../components/Loader';
import InfoMessage from '../../components/InfoMessage';

export default function Projects() {
  const [repositories, setRepositories] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRepositories() {
      try {
        setIsLoading(true);

        const response = await fetch('https://api.github.com/users/doglascode/repos');

        if (!response.ok) {
          throw new Error();
        }

        const json = await response.json();

        setRepositories(json);
        setHasError(false);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getRepositories();
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          {hasError && (
            <InfoMessage error message="Ocorreu um erro ao obter os repositórios" />
          )}

          {!hasError && (
            <>
              {repositories.length > 0 ? (
                <>
                  <h1>Meus Projetos</h1>
                  <p>Aqui estão alguns repositórios de alguns projetos publicados no meu GitHub</p>

                  <RepositoriesContainer>
                    {repositories.map(repo => (
                      repo.name !== 'doglascode' && <Repository key={repo.name} repository={repo} />
                    ))}
                  </RepositoriesContainer>
                </>
              ) : (
                <InfoMessage message="Nenhum repositório foi encontrado!" />
              )}
            </>
          )}
        </>
      )}
    </Container>
  );
}
