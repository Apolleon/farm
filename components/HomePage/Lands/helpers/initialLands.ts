import { LandType } from "../../../../types/lands";

const landsIds = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twentith",
];
const initialLand: LandType = { id: "", status: "unlocked", plant: null, requiredLvl: 0 };
let lvl = 0;

const initialLands: { [key: string]: LandType } = {};

landsIds.map((id, index) => {
  if (index < 2) initialLands[id] = { ...initialLand, id: id };
  else initialLands[id] = { ...initialLand, id: id, status: "locked", requiredLvl: (lvl += 10) };
});

export { initialLands };
