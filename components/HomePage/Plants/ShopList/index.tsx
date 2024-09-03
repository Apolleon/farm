import React, { useEffect, useRef } from "react";
import { PlantInterface, PlantType } from "@/components/types/plants";
import { setPlant } from "../../../scripts/setPlant";
import ShopListItem from "./ShopListItem";
import { useModalStore } from "../../../scripts/store/modalStore";
import { useLandsStore } from "../../../scripts/store/landsStore";
import { useAccountStore } from "../../../scripts/store/accountStore";

type ShopListType = Array<PlantInterface>;
const vegetables = ["potato", "pumpkin", "carrot", "tomato", "melon", "beat", "corn", "wheat"];

const shopList: ShopListType = vegetables.map((veg: string) => setPlant[veg](null));

const ShopList = () => {
  const { landId, setLandId } = useModalStore();
  const { plantLand } = useLandsStore();
  const { addProgress } = useAccountStore();

  const handleSetPlant = async (type: PlantType) => {
    try {
      const plant = setPlant[type](null);
      addProgress(-plant.cost, 0);
      plantLand(landId, plant);
      setLandId("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full grid grid-cols-2 gap-3 pt-2 overflow-y-auto h-full">
      {shopList.map((item) => (
        <ShopListItem key={item.type} handleBuyPlant={() => handleSetPlant(item.type)} vegetable={item} />
      ))}
    </div>
  );
};

export default ShopList;
