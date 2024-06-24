import CharacterCard from './CharacterCard';
import { Character } from '../types/Character';

function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map(({ id, name, image }) => (
        <CharacterCard key={id} name={name} image={image} />
      ))}
    </ol>
  );
}

export default CharacterList;
