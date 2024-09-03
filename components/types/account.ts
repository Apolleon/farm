interface LevelInterface {
  current: number;
  goal: number;
}

export interface AccountInterface {
  name: string;
  coins: number;
  exp: number;
  level: LevelInterface;
  locale: string;
  farmerid: number;
  refferallink: string;
  refferer: string;
}
