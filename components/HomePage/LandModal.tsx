import React, { memo } from "react";
import { useModalStore } from "../scripts/store/modalStore";
import Modal from "../Modal";
import ShopList from "./Plants/ShopList";

const title = "Посадить";

const LandModal = () => {
  const { setLandId } = useModalStore();

  return (
    <Modal>
      <div className="fixed w-full shadow-lg  flex justify-center  top-1/2 -translate-y-1/2 pl-2 pr-5 z-50 h-fit gap-4 max-h-96 overflow-hidden">
        <div className="relative bg-stone-800 rounded-sm w-full px-2 pb-2  overflow-y-auto overflow-x-hidden">
          <img
            src="/home/close.svg"
            alt=""
            className="fixed -right-1 top-0 cursor-pointer "
            onClick={() => setLandId("")}
          />
          <span className="font-bold text-2xl text-slate-200">{title}</span>
          <ShopList />
        </div>
      </div>
    </Modal>
  );
};

export default LandModal;
