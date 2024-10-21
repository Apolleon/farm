import { dictionary } from "@/components/scripts/dictiomaries/dictionary";
import { useAccountStore } from "@/components/scripts/store/accountStore";
import axios from "axios";
import { useEffect, useState } from "react";

const Refferals = ({ setShowReferals }: { setShowReferals: (b: boolean) => void }) => {
  const { account } = useAccountStore();
  const [refsCount, setRefsCount] = useState(0);
  const [btnTxt, setBtnTxt] = useState(dictionary?.[account?.locale]?.invite);
  let earnings = refsCount * 500;

  useEffect(() => {
    const getRefsCount = async () => {
      try {
        const { data } = await axios.post("/api/count-refferals", { link: account?.refferallink });
        setRefsCount(data.count);
      } catch (e) {
        console.error(e);
      }
    };

    getRefsCount();
  }, [account]);

  const copyUserName = () => {
    navigator.clipboard.writeText(`https://t.me/apolleon_bot?start=${account?.refferallink}`);
    setBtnTxt(dictionary?.[account?.locale]?.copied);
    setTimeout(() => setBtnTxt(dictionary?.[account?.locale]?.invite), 2000);
  };

  return (
    <section
      className="h-full w-full flex flex-col items-center justify-start gap-5 pt-5 text-slate-100 fixed top-0 left-0 px-4 z-50"
      style={{ background: "linear-gradient(180deg, rgba(1,51,11,1) 0%, rgba(4,119,11,1) 100%)" }}
    >
      <div className="flex flex-col gap-3  items-center bg-stone-800 rounded-md p-1 w-full">
        <span className=" text-3xl">{refsCount}</span>
        <span className="">{dictionary?.[account?.locale]?.refsCount}</span>
      </div>
      <div className="flex flex-col gap-3  items-center bg-stone-800 rounded-md p-1 w-full">
        <span className="flex text-3xl">
          <img src="/home/paid.svg" width={20} />
          {earnings}
        </span>
        <span>{dictionary?.[account?.locale]?.bounty}</span>
      </div>
      <div className="flex justify-center pt-8" onClick={copyUserName}>
        <button className="bg-stone-800 px-3 py-1 rounded-md">{btnTxt}</button>
      </div>
      <div
        className="fixed bottom-3 left-1 text-slate-100 bg-stone-800 px-3 py-1 rounded-md"
        onClick={() => setShowReferals(false)}
      >
        {dictionary?.[account?.locale]?.toHome}
      </div>
    </section>
  );
};

export default Refferals;
