export type PlantType = "potato" | "carrot" | string;

export interface PlantInterface {
  type: PlantType;
  startDate: number;
  endDate: number;
  coins: number;
  growTime: number;
  exp: number;
  status: "growing" | "ready" | string;
  ready: () => void;
  src: { [key: number]: string };
  cost: number;
  shopIcon: string;
  requiredLvl: number;
  isLocked: (lvl: number) => boolean;
}
