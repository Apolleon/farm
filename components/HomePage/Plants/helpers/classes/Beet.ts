import { Plant } from "./Plant";

const growTime = 200000;

class Beat extends Plant {
  constructor(startDate: number) {
    super(
      "beet",
      startDate,
      startDate + growTime,
      43,
      23,
      growTime,
      {
        0: "/plants/beet/beet0.png",
        1: "/plants/beet/beet1.png",
        2: "/plants/beet/beet2.png",
        3: "/plants/beet/beet3.png",
      },
      36,
      "/plants/beet/beet.png",
      6
    );
  }
}

export { Beat };
