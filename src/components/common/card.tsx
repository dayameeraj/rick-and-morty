import { Character } from "@/interfaces/types";
import Image from "next/image";

interface CharacterCardProps {
  key: number;
  character: Character;
}
const CharacterCard = ({ character, key }: CharacterCardProps) => {
  return (
    <div key={key} className="flex border border-gray-300 m-2 p-4 rounded-lg">
      <div className="mr-4">
        <Image
          src={character.image}
          alt={character.name}
          width={96}
          height={96}
          className="rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
