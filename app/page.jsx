"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

const hash =
  "query_id=AAHLNUVGAgAAAMs1RUYfHPrs&user=%7B%22id%22%3A5473908171%2C%22first_name%22%3A%22%D0%98%D0%BC%D1%8F%22%2C%22last_name%22%3A%22%D0%A4%D0%B0%D0%BC%D0%B8%D0%BB%D0%B8%D1%8F%22%2C%22username%22%3A%22apolleon_tg%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1724750202&hash=f444e786d2abe543a7f62b2718274d227006c1b04a96f584d15ab90e15804c19";

export default function Home() {
  let tg = useRef();
  const [isHashValid, setIsHashValid] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    tg.current = window.Telegram.WebApp;

    axios
      .post("/api/validate-hash", { hash: hash })
      .then((response) => setIsHashValid(response.status === 200))
      .then(async () => {
        const res = await axios.post("/api/check-unique-user", { id: 3 });
        const { data } = res.json();
        setUser(data);
      })
      .catch((e) => console.error(e));
    tg.current = window.Telegram.WebApp;
  }, []);
  console.log(user);

  return <div className="text-slate-400">{isHashValid ? "hellooo" : "fuck u"}</div>;
}
