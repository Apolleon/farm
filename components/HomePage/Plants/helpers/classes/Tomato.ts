import { Plant } from "./Plant";

const growTime = 80000;

class Tomato extends Plant {
  constructor(startDate: number) {
    super(
      "tomato",
      startDate,
      startDate + growTime,
      30,
      20,
      growTime,
      {
        0: "/plants/tomato/tomato0.png",
        1: "/plants/tomato/tomato1.png",
        2: "/plants/tomato/tomato2.png",
        3: "/plants/tomato/tomato3.png",
      },
      25,
      "/plants/tomato/tomato.png",
      5
    );
  }
}

export { Tomato };
