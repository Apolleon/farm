"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [isHashValid, setIsHashValid] = useState(false);

  useEffect(() => {
    axios
      .post("/api/validate-hash", { hash: window.Telegram.WebApp.initData })
      .then((response) => setIsHashValid(response.status === 200));
  }, []);
  useEffect(() => {
    console.log(window.Telegram.WebApp);
  }, []);
  return <div className="text-slate-400">{isHashValid ? "hellooo" : "fuck u"}</div>;
}
