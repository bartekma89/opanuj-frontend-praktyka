import { Character } from './lib/api-client-generated';

interface CharacterCardProps {
  name: Character['name'];
  image: Character['image'];
}

function CharacterCard({ image, name }: CharacterCardProps) {
  return (
    <>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </>
  );
}

export default CharacterCard;
