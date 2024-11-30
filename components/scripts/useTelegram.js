import { useRef } from "react";

export const useTelegram = () => {
  const tg = useRef(window.Telegram.WebApp);

  tg.current?.expand();
  tg.current?.ready();

  const locale = ["en", "ru"].includes(tg.current?.initDataUnsafe?.user?.language_code)
    ? tg.current?.initDataUnsafe?.user?.language_code
    : "en";
  const userName = tg.current?.initDataUnsafe?.user?.first_name || "Player";
  const userId = tg.current?.initDataUnsafe?.user?.id;

  return { tg, locale, userName, userId };
};
