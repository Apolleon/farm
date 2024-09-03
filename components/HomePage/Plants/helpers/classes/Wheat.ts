import { Plant } from "./Plant";

const growTime = 720000;

class Wheat extends Plant {
  constructor(startDate: number) {
    super(
      "wheat",
      startDate,
      startDate + growTime,
      300,
      80,
      growTime,
      {
        0: "/plants/wheat/wheat0.png",
        1: "/plants/wheat/wheat1.png",
        2: "/plants/wheat/wheat2.png",
        3: "/plants/wheat/wheat3.png",
      },
      200,
      "/plants/wheat/wheat.png",
      15
    );
  }
}

export { Wheat };
