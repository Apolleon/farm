"use client";

import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [isHashValid, setIsHashValid] = useState(false);

  useEffect(() => {
    axios
      .post("/api/validate-hash", { hash: window.Telegram.WebApp.initData })
      .then((response) => setIsHashValid(response.status === 200));
  }, []);

  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body>{isHashValid ? children : "fuck u"}</body>
    </html>
  );
}
