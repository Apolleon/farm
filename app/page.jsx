"use client";

import { useState, useEffect, useRef, memo } from "react";
import axios from "axios";
import HomePage from "@/components/HomePage";
import { useLandsStore } from "@/components/scripts/store/landsStore";
import { useAccountStore } from "@/components/scripts/store/accountStore";

const hash =
  "query_id=AAHLNUVGAgAAAMs1RUYfHPrs&user=%7B%22id%22%3A5473908171%2C%22first_name%22%3A%22%D0%98%D0%BC%D1%8F%22%2C%22last_name%22%3A%22%D0%A4%D0%B0%D0%BC%D0%B8%D0%BB%D0%B8%D1%8F%22%2C%22username%22%3A%22apolleon_tg%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1724750202&hash=f444e786d2abe543a7f62b2718274d227006c1b04a96f584d15ab90e15804c19";

const choseLocale = (loc) => (["en", "ru"].includes(loc) ? loc : "en");

const Home = () => {
  let tg = useRef();
  const [isHashValid, setIsHashValid] = useState(true);
  const [user, setUser] = useState();
  const { setInitialLands } = useLandsStore();
  const { init, setLocale } = useAccountStore();

  useEffect(() => {
    tg.current = window.Telegram.WebApp;
    tg.current?.expand();
    tg.current.ready((e) => {
      console.log(e);
      console.log("ready");
    });
    console.log("not ready");
    tg.current.isClosingConfirmationEnabled = true;
    const locale = choseLocale(tg.current?.initDataUnsafe?.user?.language_code);
    const userName = tg.current?.initDataUnsafe?.user?.first_name || "Player";
    const lands = localStorage.getItem("lands");
    const account = localStorage.getItem("account");
    const user = JSON.parse(account);

    if (account) init({ ...user, locale: locale, name: userName });
    else setLocale(locale, userName);
    if (lands) {
      const newLands = JSON.parse(localStorage["lands"]);
      setInitialLands(newLands);
    }
  }, []);

  // useEffect(() => {
  //   tg.current = window.Telegram.WebApp;

  //   axios.post("/api/validate-hash", { hash: hash }).then((response) => setIsHashValid(response.status === 200));
  //   // // .then(async () => {
  //   // //   const { data } = await axios.post("/api/check-unique-user", { id: 4 });

  //   // //   setUser(data.data[0]);
  //   // // })
  //   // .catch((e) => console.error(e));
  //   tg.current = window.Telegram.WebApp;
  // }, []);
  // console.log(user);

  return <div className="text-slate-400">{isHashValid ? <HomePage /> : "error"}</div>;
};

export default memo(Home);
