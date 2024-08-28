import React, { FC } from "react";
import { useAccountStore } from "../scripts/store/accountStore";

const AccountView: FC = () => {
  const { account } = useAccountStore();

  return (
    <div className="fixed w-full top-0 left-0 p-1 z-50 ">
      <div className="w-full flex flex-col gap-2 bg-stone-800 p-2 rounded-md shadow-lg text-slate-200">
        <div className="w-full flex justify-between font-bold text-2xl">
          <span className="">{account.name}</span>
          <div>
            <img src={"home/paid.svg"} alt="coin" />
            <span className="">{account.coins}</span>
          </div>
        </div>
        <div className="w-full">
          <progress
            className="w-full bg-slate-50"
            max={account.level.goal}
            value={account.exp}
            style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25) inset" }}
          />
          <div className="w-full flex justify-between">
            <span className="">{account.level.current} ур.</span>
            <span className="">{account.level.goal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountView;
