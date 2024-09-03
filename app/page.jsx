"use client";

import { useState, useEffect, useRef, memo } from "react";
import axios from "axios";
import HomePage from "@/components/HomePage";
import { useLandsStore } from "@/components/scripts/store/landsStore";
import { useAccountStore } from "@/components/scripts/store/accountStore";
import LoadingScreen from "@/components/HomePage/LoadingScreen";

const choseLocale = (loc) => (["en", "ru"].includes(loc) ? loc : "en");

const Home = () => {
  let tg = useRef();
  const [isHashValid, setIsHashValid] = useState(true);
  const [loading, setLoading] = useState(true);
  const { setInitialLands } = useLandsStore();
  const { init, setLocale } = useAccountStore();

  useEffect(() => {
    tg.current = window.Telegram.WebApp;
    tg.current?.expand();
    tg.current?.ready();

    const locale = choseLocale(tg.current?.initDataUnsafe?.user?.language_code);
    const userName = tg.current?.initDataUnsafe?.user?.first_name || "Player";
    const userId = tg.current?.initDataUnsafe?.user?.id;
    const initIalFn = async () => {
      axios
        .post("/api/validate-hash", { hash: tg.current?.initData })
        .then((response) => {
          setIsHashValid(response.status === 200);
          setLoading(false);
        })
        .catch((e) => {
          console.error(e);
          setIsHashValid(false);
          setLoading(false);
        });

      const { data } = await axios.post("/api/check-unique-user", { id: userId });
      const { lands, farmerid, ...acc } = data.data;

      if (lands) {
        init({ ...acc, locale: locale, name: userName, farmerid: farmerid, level: JSON.parse(acc.level) });
        const newLands = JSON.parse(lands);
        setInitialLands(newLands);
      } else {
        const { refferallink, refferer } = acc;
        setLocale(locale, userName, farmerid, refferallink, refferallink);
      }
    };
    initIalFn();
  }, []);

  return (
    <div className="text-slate-400 h-full">
      {loading && <LoadingScreen />}
      {!loading && isHashValid && <HomePage />}

      {!loading && !isHashValid && (
        <div className="h-full w-full flex justify-center items-center">Пользователь не авторизован</div>
      )}
    </div>
  );
};

export default memo(Home);
