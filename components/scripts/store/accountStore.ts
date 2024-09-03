import { create, StoreApi, UseBoundStore } from "zustand";
import { AccountInterface } from "@/components/types/account";

export interface AccountState {
  account: AccountInterface;
  addProgress: (c: number, e: number) => void;
  init: (acc: AccountInterface) => void;
  setLocale: (l: string, u: string, id: number, link: string, r: string) => void;
}

export const useAccountStore: UseBoundStore<StoreApi<AccountState>> = create((set) => ({
  account: {} as AccountInterface,
  init: (acc) => set((state: AccountState) => ({ ...state, account: acc })),
  setLocale: (locale, userName, id, link, ref) =>
    set((state: AccountState) => ({
      ...state,
      account: {
        locale: locale,
        name: userName,
        farmerid: id,
        coins: 10,
        exp: 0,
        level: { current: 1, goal: 60 },
        refferallink: link,
        refferer: ref,
      },
    })),
  addProgress: (coins: number, exp: number) =>
    set((state: AccountState) => {
      const totalCOins = state.account.coins + coins;
      const curExp = state.account.exp + exp;

      if (curExp >= state.account.level.goal) {
        const dif = curExp - state.account.level.goal;
        return {
          ...state,
          account: {
            ...state.account,
            exp: dif,
            coins: totalCOins,
            level: {
              current: state.account.level.current + 1,
              goal: state.account.level.goal + Math.round(state.account.level.goal / 2),
            },
          },
        };
      }

      return { ...state, account: { ...state.account, exp: curExp, coins: totalCOins } };
    }),
}));
