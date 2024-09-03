import { Plant } from "./Plant";

const growTime = 600000;

class Corn extends Plant {
  constructor(startDate: number) {
    super(
      "corn",
      startDate,
      startDate + growTime,
      145,
      50,
      growTime,
      {
        0: "/plants/corn/corn1.png",
        1: "/plants/corn/corn2.png",
        2: "/plants/corn/corn3.png",
        3: "/plants/corn/corn4.png",
      },
      120,
      "/plants/corn/corn.png",
      10
    );
  }
}

export { Corn };
