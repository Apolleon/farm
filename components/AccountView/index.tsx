import React, { FC } from "react";
import { useAccountStore } from "../scripts/store/accountStore";
import { dictionary } from "../scripts/dictiomaries/dictionary";

const AccountView: FC = () => {
  const { account } = useAccountStore();

  return (
    <div className="fixed w-full top-0 left-0 p-1 z-50 ">
      <div className="w-full flex flex-col  bg-stone-800 p-2 rounded-md  text-slate-200">
        <div className="w-full flex justify-between  text-xl">
          <span className="">{account.name}</span>
          <div className="flex items-center">
            <img src={"home/paid.svg"} alt="coin" />
            <span className="">{account.coins}</span>
          </div>
        </div>
        <div className="w-full -mt-3">
          <progress
            className="w-full bg-slate-50"
            max={50}
            value={20}
            style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25) inset" }}
          />
          <div className="w-full flex justify-between text-sm">
            <span className="">
              {account?.level?.current} {dictionary[account?.locale]?.lvl}
            </span>
            <span className="">{account?.level?.goal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountView;
