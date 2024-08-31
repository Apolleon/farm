import { Plant } from "./Plant";

const growTime = 100000;

class Carrot extends Plant {
  constructor(startDate: number) {
    super(
      "carrot",
      startDate,
      startDate + growTime,
      18,
      17,
      growTime,
      {
        0: "/plants/carrot/carrot0.png",
        1: "/plants/carrot/carrot1.png",
        2: "/plants/carrot/carrot2.png",
        3: "/plants/carrot/carrot3.png",
      },
      12,
      "/plants/carrot/carrot.png",
      4
    );
  }
}

export { Carrot };
