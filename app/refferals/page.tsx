"use client";

import { dictionary } from "@/components/scripts/dictiomaries/dictionary";
import { useAccountStore } from "@/components/scripts/store/accountStore";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Refferals = () => {
  const { account } = useAccountStore();
  const [refsCount, setRefsCount] = useState(0);
  const [btnTxt, setBtnTxt] = useState(dictionary?.[account?.locale]?.invite);
  let earnings = refsCount * 500;

  useEffect(() => {
    const getRefsCount = async () => {
      const { data } = await axios.post("/api/count-refferals", { link: account.refferallink });
      setRefsCount(data);
    };

    getRefsCount();
  }, []);

  const copyUserName = () => {
    navigator.clipboard.writeText(account.refferallink);
    setBtnTxt(dictionary?.[account?.locale]?.copied);
    setTimeout(() => setBtnTxt(dictionary?.[account?.locale]?.invite), 2000);
  };

  return (
    <section
      className="h-full w-full flex flex-col items-center justify-start gap-5 pt-5 text-slate-100"
      style={{ background: "linear-gradient(180deg, rgba(1,51,11,1) 0%, rgba(4,119,11,1) 100%)" }}
    >
      <div className="flex flex-col gap-3 w-fit items-center">
        <span className=" text-xl">{refsCount}</span>
        <span className="">{dictionary?.[account?.locale]?.refsCount}</span>
      </div>
      <div className="flex flex-col gap-3 w-fit items-center">
        <span className="flex text-xl">
          <img src="/home/paid.svg" width={20} />
          {earnings}
        </span>
        <span>{dictionary?.[account?.locale]?.bounty}</span>
      </div>
      <div className="flex justify-center pt-8" onClick={copyUserName}>
        <button className="bg-stone-800 px-3 py-1 rounded-md">{btnTxt}</button>
      </div>
      <Link className="fixed bottom-3 left-1 text-slate-100 bg-stone-800 px-3 py-1 rounded-md" href={"/"}>
        {dictionary?.[account?.locale]?.toHome}
      </Link>
    </section>
  );
};

export default Refferals;
