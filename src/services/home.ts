const characterUrl = "https://rickandmortyapi.com/api/character";
// const episodeUrl = "https://rickandmortyapi.com/api/episode";
// const locationUrl = "https://rickandmortyapi.com/api/location";
export const getAllCharacters = async () => {
  const response = await fetch(characterUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.results;
};
export const getCharacter = async (id: number) => {
  const response = await fetch(`${characterUrl}/${id}`);
  const data = await response.json();
  return data;
};
