import React, { FC } from "react";
import LandModal from "./LandModal";
import Lands from "./Lands";

import { useModalStore } from "../scripts/store/modalStore";
import AccountView from "../AccountView";

const HomePage: FC = () => {
  const { landId } = useModalStore();

  return (
    <section className="w-full h-full overflow-auto relative">
      <AccountView />
      <div
        className="bg-cover pt-96 w-screen min-w-fit"
        style={{
          backgroundImage: `url("/home/background.jpg")`,
          height: "1080px",
          backgroundPosition: "50% -600px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1920px",
        }}
      >
        <Lands />
      </div>
      {landId && <LandModal />}
    </section>
  );
};

export default HomePage;
