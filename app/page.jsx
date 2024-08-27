"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(window.Telegram.WebApp);
  }, []);
  return <div>helloooo</div>;
}
