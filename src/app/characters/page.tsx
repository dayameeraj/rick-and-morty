import CharacterCard from "@/components/common/card";
import { Character } from "@/interfaces/types";
import { getAllCharacters } from "@/services/home";

export default async function characters() {
  const data: Character[] = await getAllCharacters();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
