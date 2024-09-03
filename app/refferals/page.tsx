"use client";

import { dictionary } from "@/components/scripts/dictiomaries/dictionary";
import { useAccountStore } from "@/components/scripts/store/accountStore";
import axios from "axios";
import { useEffect, useState } from "react";

const Refferals = () => {
  const { account } = useAccountStore();
  const [refsCount, setRefsCount] = useState(0);
  let earnings = refsCount * 500;

  useEffect(() => {
    const getRefsCount = async () => {
      const { data } = await axios.post("/api/count-refferals", { link: account.refferallink });
      setRefsCount(data);
    };

    getRefsCount();
  }, []);

  return (
    <section
      className="h-full w-full flex flex-col items-center justify-start gap-5 pt-5 text-slate-100"
      style={{ background: "linear-gradient(180deg, rgba(1,51,11,1) 0%, rgba(4,119,11,1) 100%)" }}
    >
      <div className="flex flex-col gap-3 w-fit ">
        <span>{refsCount}</span>
        <span className="">{dictionary?.[account?.locale]?.refsCount}</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="flex">
          <img src="/home/paid.svg" width={20} />
          {earnings}
        </span>
        <span>{dictionary?.[account?.locale]?.refsCount}</span>
      </div>
    </section>
  );
};

export default Refferals;
