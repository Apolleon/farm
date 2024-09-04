import React, { FC } from "react";
import LandModal from "./LandModal";
import Lands from "./Lands";
import { useModalStore } from "../scripts/store/modalStore";

const HomePage: FC = () => {
  const { landId } = useModalStore();

  return (
    <section
      className="w-max h-full overflow-auto relative"
      style={{
        backgroundImage: `url("/home/background.jpg")`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full min-w-fit pb-10 -bottom-64 relative">
        <Lands />
      </div>
      {landId && <LandModal />}
    </section>
  );
};

export default HomePage;
