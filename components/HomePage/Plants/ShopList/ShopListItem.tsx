//@ts-nocheck
import React, { FC } from "react";
import { PlantInterface } from "@/components/types/plants";
import { useAccountStore } from "../../../scripts/store/accountStore";

interface ShopListItemInterface {
  handleBuyPlant: () => void;
  vegetable: PlantInterface;
}

const ShopListItem: FC<ShopListItemInterface> = ({ handleBuyPlant, vegetable }) => {
  const { account } = useAccountStore();

  const disabled = account.coins < vegetable.cost;
  const locked = account.level.current < vegetable.requiredLvl;

  const calcGrowTime = () => {
    const secondsGrow = vegetable.growTime / 1000;
    const mins = secondsGrow > 60 ? Math.floor(secondsGrow / 60) : "00";
    const secs = secondsGrow % 60;
    return mins + ":" + secs;
  };

  return (
    <button
      disabled={disabled}
      className={`${
        !disabled ? "bg-cyan-600" : "bg-slate-500"
      } text-slate-300 px-3 py-1 relative  rounded-md h-36 grid`}
      onClick={handleBuyPlant}
    >
      <div className="absolute flex flex-col left-1 top-3 text-sm">
        <div className="flex gap-1 items-center">
          <img src={"home/paid.svg"} className="w-4" alt="coin" />
          <span>{vegetable.coins}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span>Exp</span>
          <span>{vegetable.exp}</span>
        </div>
        <div className="flex gap-1 items-center">
          <img src={"/home/timer.svg"} alt="timer" className="w-4" />
          <span>{calcGrowTime()}</span>
        </div>
      </div>
      <img src={vegetable.shopIcon} alt={vegetable.type} width={80} className="justify-self-end" />
      <div className="flex w-full justify-end absolute bottom-2 right-1">
        <img src={"home/paid.svg"} className={vegetable.cost > account.coins ? "fill-slate-700" : ""} alt="coin" />
        <span className={vegetable.cost > account.coins ? "text-slate-700" : ""}>{vegetable.cost}</span>
      </div>
      {locked && (
        <div
          className="absolute left-0 top-0 w-full h-full z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={"home/lock.svg"} alt="lock" />
          <span className="text-slate-100">{vegetable.requiredLvl}</span>
        </div>
      )}
    </button>
  );
};

export default React.memo(ShopListItem);
