interface CharacterCardProps {
  name: string;
  image: string;
}

function CharacterCard({ image, name }: CharacterCardProps) {
  return (
    <li className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </li>
  );
}

export default CharacterCard;
