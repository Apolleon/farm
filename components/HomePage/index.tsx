import React, { FC } from "react";
import LandModal from "./LandModal";
import Lands from "./Lands";

import { useModalStore } from "../scripts/store/modalStore";
import AccountView from "../AccountView";

const HomePage: FC = () => {
  const { landId } = useModalStore();

  return (
    <section
      className="w-full h-full overflow-auto relative"
      style={{
        backgroundImage: `url("/home/background.jpg")`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <AccountView />
      <div className="w-screen min-w-fit pb-10 absolute bottom-3">
        <Lands />
      </div>
      {landId && <LandModal />}
    </section>
  );
};

export default HomePage;
