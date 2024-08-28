import React from "react";
import { PlantInterface, PlantType } from "@/components/types/plants";
import { setPlant } from "../../../scripts/setPlant";
import ShopListItem from "./ShopListItem";
import { useModalStore } from "../../../scripts/store/modalStore";
import { useLandsStore } from "../../../scripts/store/landsStore";
import { useAccountStore } from "../../../scripts/store/accountStore";

type ShopListType = Array<PlantInterface>;
const vegetables = ["potato", "pumpkin", "tomato", "melon", "carrot"];

const shopList: ShopListType = vegetables.map((veg: string) => setPlant[veg]());

const ShopList = () => {
  const { landId, setLandId } = useModalStore();
  const { plantLand } = useLandsStore();
  const { addProgress } = useAccountStore();

  const handleSetPlant = (type: PlantType) => {
    const plant = setPlant[type]();
    addProgress(-plant.cost, 0);
    plantLand(landId, plant);
    setLandId("");
  };

  return (
    <div className="w-full grid grid-cols-2 gap-3 pt-2">
      {shopList.map((item) => (
        <ShopListItem key={item.type} handleBuyPlant={() => handleSetPlant(item.type)} vegetable={item} />
      ))}
    </div>
  );
};

export default ShopList;