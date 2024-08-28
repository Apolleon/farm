import { PlantInterface } from "@/components/types/plants";

class Plant implements PlantInterface {
  type = "";
  startDate = 0;
  endDate = 0;
  coins = 0;
  exp = 0;
  growTime = 0;
  status = "growing";
  src = {};
  cost = 0;
  shopIcon = "";
  requiredLvl = 0;

  constructor(
    type: string,
    startDate: number,
    endDate: number,
    coins: number,
    exp: number,
    growTime: number,
    src: { [key: number]: string },
    cost: number,
    shopIcon: string,
    requiredLvl: number
  ) {
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
    this.coins = coins;
    this.exp = exp;
    this.growTime = growTime;
    this.src = src;
    this.cost = cost;
    this.shopIcon = shopIcon;
    this.requiredLvl = requiredLvl;
  }

  ready(): void {
    this.status = "ready";
  }

  isLocked(accLvl: number): boolean {
    return this.requiredLvl < accLvl;
  }
}

export { Plant };
