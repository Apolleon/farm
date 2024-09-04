import { PlantInterface, PlantType } from "../types/plants";
import { Carrot } from "../HomePage/Plants/helpers/classes/Carrot";
import { WaterMelon } from "../HomePage/Plants/helpers/classes/WaterMelon";
import { Potato } from "../HomePage/Plants/helpers/classes/Potato";
import { Pumpkin } from "../HomePage/Plants/helpers/classes/Pumpkin";
import { Tomato } from "../HomePage/Plants/helpers/classes/Tomato";
import { Wheat } from "../HomePage/Plants/helpers/classes/Wheat";
import { Corn } from "../HomePage/Plants/helpers/classes/Corn";
import { Beet } from "../HomePage/Plants/helpers/classes/Beet";

export const setPlant: { [key: PlantType]: (startDate: number | null) => PlantInterface } = {
  potato: (startDate) => {
    const now = Date.now();
    const potato = new Potato(startDate || now);
    return potato;
  },
  pumpkin: (startDate) => {
    const now = Date.now();
    const pumpkin = new Pumpkin(startDate || now);
    return pumpkin;
  },
  melon: (startDate) => {
    const now = Date.now();
    const melon = new WaterMelon(startDate || now);
    return melon;
  },
  tomato: (startDate) => {
    const now = Date.now();
    const tomato = new Tomato(startDate || now);
    return tomato;
  },
  carrot: (startDate) => {
    const now = Date.now();
    const carrot = new Carrot(startDate || now);
    return carrot;
  },
  wheat: (startDate) => {
    const now = Date.now();
    const carrot = new Wheat(startDate || now);
    return carrot;
  },
  corn: (startDate) => {
    const now = Date.now();
    const carrot = new Corn(startDate || now);
    return carrot;
  },
  beet: (startDate) => {
    const now = Date.now();
    const carrot = new Beet(startDate || now);
    return carrot;
  },
};
