import { Plant } from "./Plant";

const growTime = 20000;

class Potato extends Plant {
  constructor(startDate: number) {
    super(
      "potato",
      startDate,
      startDate + growTime,
      10,
      10,
      growTime,
      {
        0: "/plants/potato/potato1.png",
        1: "/plants/potato/potato2.png",
        2: "/plants/potato/potato3.png",
        3: "/plants/potato/potato4.png",
      },
      7,
      "/plants/potato/potato.png",
      0
    );
  }
}

export { Potato };
