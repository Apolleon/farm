import React, { useState, useRef, useEffect } from "react";
import Land from "./Land";
import { useLandsStore } from "@/components/scripts/store/landsStore";
import { useAccountStore } from "@/components/scripts/store/accountStore";
import axios from "axios";

const Lands = () => {
  const firstRender = useRef("first");
  const { lands } = useLandsStore();
  const { account } = useAccountStore();
  const [buttonTitle, setButtonTitle] = useState("Сохранить прогресс");

  // const save = () => {
  //   const res = [];
  //   localStorage.setItem("account", JSON.stringify(account));

  //   Object.values(lands).map((land) => (land.status === "unlocked" || land.status === "gardened") && res.push(land));
  //   localStorage.setItem("lands", JSON.stringify(res));
  //   setButtonTitle("Сохранено");
  //   setTimeout(() => setButtonTitle("Сохранить прогресс"), 2000);
  // };

  useEffect(() => {
    if (firstRender.current !== "second") {
      firstRender.current = "second";
      return;
    }
    const res = [];
    Object.values(lands).map((land) => (land.status === "unlocked" || land.status === "gardened") && res.push(land));
    axios.post("/api/update-lands", { acc: account, lands: JSON.stringify(res) });
  }, [lands, account]);

  return (
    <section className="ml-12 flex flex-col gap-2 pr-12">
      <div className="flex gap-2 ">
        <Land item={lands.first} />
        <Land item={lands.second} />
        <Land item={lands.third} />
      </div>
      <div className="flex ml-5 gap-2 ">
        <Land item={lands.fourth} />
        <Land item={lands.fifth} />
        <Land item={lands.sixth} />
      </div>
      <div className="flex gap-2 ml-10 ">
        <Land item={lands.seventh} />
        <Land item={lands.eighth} />
        <Land item={lands.ninth} />
      </div>
      <div className="flex gap-2 ml-14">
        <Land item={lands.tenth} />
        <Land item={lands.eleventh} />
        <Land item={lands.twentith} />
      </div>
    </section>
  );
};

export default React.memo(Lands);
