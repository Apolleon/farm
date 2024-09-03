import React, { FC, useCallback, memo } from "react";
import { LandType } from "@/components/types/lands";
import { PlantInterface } from "@/components/types/plants";
import PlantOnLand from "../../Plants/PlantOnLand";
import { useLandsStore } from "@/components/scripts/store/landsStore";
import { useModalStore } from "@/components/scripts/store/modalStore";
import { useAccountStore } from "@/components/scripts/store/accountStore";
import { dictionary } from "@/components/scripts/dictiomaries/dictionary";

interface LandProps {
  item: LandType;
}

const Land: FC<LandProps> = ({ item }) => {
  const { clearLand, setLandReady } = useLandsStore();
  const { setLandId } = useModalStore();
  const { addProgress, account } = useAccountStore();

  const handleClearLand = useCallback(
    (coins: number, exp: number) => {
      if (item?.plant?.status === "ready") {
        addProgress(coins, exp);
        clearLand(item.id);
      }
    },
    [item.plant?.status]
  );

  const handleSetReady = () => {
    item.plant?.ready();
    const newPlant = item.plant;
    setLandReady(item.id, newPlant as PlantInterface);
  };

  const handleOpenModal = () => {
    if (item.status === "gardened" || item.status === "locked") return;
    setLandId(item.id);
  };

  return (
    <div className="w-28 cursor-pointer relative z-10" onClick={handleOpenModal}>
      <img width={162} className="h-24" loading="lazy" alt="land" src={"/home/empty land.png"} />
      {item.status === "gardened" && (
        <PlantOnLand handleSetReady={handleSetReady} handleClearLand={handleClearLand} plant={item?.plant} />
      )}
      {item.status === "locked" && (
        <div className="absolute top-0  left-0  bg-slate-700 w-full h-full flex items-center justify-center bg-opacity-75 rounded-xl flex-col">
          <img src={"/home/lock.svg"} alt="lock" loading="lazy" width={20} />
          <span className="text-slate-100">
            {item.requiredLvl} {dictionary?.[account?.locale]?.lvl}
          </span>
        </div>
      )}
      {/* <img width={182} className="ml-4 relative z-10" loading="lazy" alt="land" src={bot} /> */}
    </div>
  );
};

export default memo(Land);
