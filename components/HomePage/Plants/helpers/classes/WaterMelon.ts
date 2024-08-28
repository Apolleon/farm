import { Plant } from "./Plant";

const growTime = 250000;

class WaterMelon extends Plant {
  constructor(startDate: number) {
    super(
      "melon",
      startDate,
      startDate + growTime,
      50,
      25,
      growTime,
      {
        0: "/plants/melon/melon0.png",
        1: "/plants/melon/melon1.png",
        2: "/plants/melon/melon2.png",
        3: "/plants/melon/melon3.png",
      },
      40,
      "/plants/melon/watermelon.png",
      8
    );
  }
}

export { WaterMelon };
