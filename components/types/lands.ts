import { PlantInterface } from "./plants";

export type LandStatus = "unlocked" | "locked" | "gardened";

export interface LandType {
  id: string;
  status: LandStatus;
  plant: PlantInterface | null;
  requiredLvl: number;
}

export interface InitLand extends LandType {
  serial: string;
}
