import { useEffect, useState } from 'react';

import { DefaultApi, Character } from './lib/api/api-client-generated/';

import CharacterList from './CharacterList';

function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const api = new DefaultApi();
    api.getCharacters().then((res) => {
      setCharacters(res.results);
    });
  }, []);

  return <CharacterList characters={characters} />;
}

export default Characters;
