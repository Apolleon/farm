import React from "react";
import { PlantInterface, PlantType } from "@/components/types/plants";
import { setPlant } from "../../../scripts/setPlant";
import ShopListItem from "./ShopListItem";
import { useModalStore } from "../../../scripts/store/modalStore";
import { useLandsStore } from "../../../scripts/store/landsStore";
import { useAccountStore } from "../../../scripts/store/accountStore";
import { LandType } from "@/components/types/lands";
import axios from "axios";

type ShopListType = Array<PlantInterface>;
const vegetables = ["potato", "pumpkin", "tomato", "melon", "carrot"];

const shopList: ShopListType = vegetables.map((veg: string) => setPlant[veg](null));

const ShopList = () => {
  const { landId, setLandId } = useModalStore();
  const { plantLand, lands } = useLandsStore();
  const { addProgress, account } = useAccountStore();

  const handleSetPlant = async (type: PlantType) => {
    const res: LandType[] = [];

    Object.values(lands).map((land) => (land.status === "unlocked" || land.status === "gardened") && res.push(land));
    try {
      await axios.post("update.lands", { accId: account.farmerid, lands: JSON.stringify(res) });
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
