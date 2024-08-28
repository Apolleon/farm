import { create, StoreApi, UseBoundStore } from "zustand";
import { InitLand, LandType } from "@/components/types/lands";
import { initialLands } from "../../HomePage/Lands/helpers/initialLands";
import { PlantInterface } from "@/components/types/plants";
import { setPlant } from "../setPlant";

export interface State {
  lands: { [key: string]: LandType };
  clearLand: (id: string) => void;
  plantLand: (id: string, plant: PlantInterface) => void;
  setLandReady: (id: string, plant: PlantInterface) => void;
  setInitialLands: (lands: []) => void;
}

export const useLandsStore: UseBoundStore<StoreApi<State>> = create((set) => ({
  lands: initialLands,
  clearLand: (id: string) =>
    set(
      (state: State): State => ({
        ...state,
        lands: { ...state.lands, [id]: { ...state.lands[id], plant: null, status: "unlocked" } },
      })
    ),
  plantLand: (id: string, plant: PlantInterface) =>
    set(
      (state: State): State => ({
        ...state,
        lands: { ...state.lands, [id]: { ...state.lands[id], status: "gardened", plant: plant } },
      })
    ),
  setLandReady: (id: string, plant: PlantInterface) =>
    set(
      (state: State): State => ({
        ...state,
        lands: { ...state.lands, [id]: { ...state.lands[id], plant: plant } },
      })
    ),
  setInitialLands: (lands: InitLand[]) =>
    set((state: State): State => {
      lands.map((land) => {
        let plant = null;
        if (land.plant) plant = setPlant[land.plant.type](land.plant.startDate);
        state = { ...state, lands: { ...state.lands, [land.id]: { ...land, plant: plant } } };
      });
      return state;
    }),
}));
