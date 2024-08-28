import { Plant } from "./Plant";

const growTime = 30000;

class Pumpkin extends Plant {
  constructor(startDate: number) {
    super(
      "pumpkin",
      startDate,
      startDate + growTime,
      15,
      15,
      growTime,
      {
        0: "/plants/pumpkin/pumpkin0.png",
        1: "/plants/pumpkin/pumpkin1.png",
        2: "/plants/pumpkin/pumpkin2.png",
        3: "/plants/pumpkin/pumpkin3.png",
      },
      11,
      "/plants/pumpkin/pumpkin.png",
      2
    );
  }
}

export { Pumpkin };
