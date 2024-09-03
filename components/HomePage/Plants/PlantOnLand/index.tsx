import React, { FC, useEffect, useState, memo } from "react";
import { PlantInterface } from "../../../../types/plants";

interface PlantOnLandProps {
  plant: PlantInterface | null;
  handleClearLand: (c: number, e: number) => void;
  handleSetReady: () => void;
}

const PlantOnLand: FC<PlantOnLandProps> = ({ plant, handleClearLand, handleSetReady }) => {
  const [imgSrc, setImgSrc] = useState(plant?.src[0]);
  const [timer, setTimer] = useState<number | undefined>(undefined);

  useEffect(() => {
    const now = Date.now();

    if (now > (plant?.endDate as number)) {
      setImgSrc(plant?.src[3]);
      handleSetReady();
      return;
    }
    const dif = Math.floor((Number(plant?.endDate) - now) / 1000);
    setTimer(dif);
  }, [plant?.endDate]);

  useEffect(() => {
    if (timer === 0) {
      setImgSrc(plant?.src[3]);
      handleSetReady();
      return;
    }

    if (!timer) {
      return;
    }

    const period = Number(plant?.growTime) / 1000 / 3;
    if (timer < period) setImgSrc(plant?.src[2]);
    else if (timer < period * 2) setImgSrc(plant?.src[1]);

    if (timer > 0) setTimeout(() => setTimer((prev) => Number(prev) - 1), 1000);
  }, [timer]);

  switch (plant?.type) {
    case "potato":
      return (
        <>
          <div
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
            className="absolute rounded-full bg-slate-50 w-fit px-2 z-20 bottom-1/2 left-1/2 text-center -translate-x-1/2"
          >
            {Number(timer) > 0 ? timer : "Готово!"}
          </div>
          <img
            height={20}
            className="absolute bottom-8 md:bottom-10 z-10   w-fit max-w-24 md:max-w-36 "
            src={imgSrc}
            alt="potato"
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
          />
        </>
      );
    case "pumpkin":
      return (
        <>
          <div
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
            className="absolute rounded-full bg-slate-50 w-fit px-2 z-20 bottom-1/2 left-1/2 text-center -translate-x-1/2"
          >
            {Number(timer) > 0 ? timer : "Готово!"}
          </div>
          <img
            height={20}
            className="absolute bottom-5 md:bottom-7 z-10   w-fit maw-w-24 md:max-w-36 "
            src={imgSrc}
            alt="potato"
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
          />
        </>
      );
    case "tomato":
      return (
        <>
          <div
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
            className="absolute rounded-full bg-slate-50 w-fit px-2 z-20 bottom-1/2 left-1/2 text-center -translate-x-1/2"
          >
            {Number(timer) > 0 ? timer : "Готово!"}
          </div>
          <img
            height={20}
            className="absolute bottom-5 md:bottom-7 z-10   w-fit maw-w-24 md:max-w-36 "
            src={imgSrc}
            alt="tomato"
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
          />
        </>
      );
    case "melon":
      return (
        <>
          <div
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
            className="absolute rounded-full bg-slate-50 w-fit px-2 z-20 bottom-1/2 left-1/2 text-center -translate-x-1/2"
          >
            {Number(timer) > 0 ? timer : "Готово!"}
          </div>
          <img
            height={20}
            className="absolute bottom-5 md:bottom-7 z-10  w-fit maw-w-24 md:max-w-36 "
            src={imgSrc}
            alt="potato"
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
          />
        </>
      );
    case "carrot":
      return (
        <>
          <div
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
            className="absolute rounded-full bg-slate-50 w-fit px-2 z-20 bottom-1/2 left-1/2 text-center -translate-x-1/2"
          >
            {Number(timer) > 0 ? timer : "Готово!"}
          </div>
          <img
            height={20}
            className="absolute bottom-5 md:bottom-7 z-10  w-fit maw-w-24 md:max-w-36 "
            src={imgSrc}
            alt="potato"
            onClick={() => handleClearLand(plant?.coins, plant?.exp)}
          />
        </>
      );
    default:
      return null;
  }
};

export default memo(PlantOnLand);
