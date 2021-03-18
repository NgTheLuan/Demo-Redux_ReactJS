import character_json from "../data/character.json";

export function createCharacter(id) {
  let characters = character_json.find((c) => c.id === id);
  return characters;
}
