import CharacterCard from './CharacterCard';

import { Character } from './lib/api-client-generated';

function CharacterList({ characters }: { characters: Required<Character[]> }) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map(({ id, name, image }) => (
        <li key={id} className="flex flex-col items-center">
          <CharacterCard key={id} name={name} image={image} />
        </li>
      ))}
    </ol>
  );
}

export default CharacterList;
