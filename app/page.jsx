import { useTelegram } from "@/hooks/useTelegram";

const Home = () => {
  const { tg, locale, userId, userName } = useTelegram();
  const [isHashValid, setIsHashValid] = useState(true);
  const [loading, setLoading] = useState(true);
  const { setInitialLands } = useLandsStore();
  const { init, setLocale } = useAccountStore();
  const [showReferals, setShowReferals] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        const response = await axios.post("/api/validate-hash", { hash: tg.current?.initData });
        setIsHashValid(response.status === 200);
      } catch {
        setIsHashValid(false);
      } finally {
        setLoading(false);
      }

      try {
        const { data } = await axios.post("/api/check-unique-user", { id: userId });
        const { lands, farmerid, ...acc } = data.data;

        if (lands) {
          init({ ...acc, locale, name: userName, farmerid, level: JSON.parse(acc.level) });
          setInitialLands(JSON.parse(lands));
        } else {
          setLocale(locale, userName, farmerid, acc.refferallink, acc.refferallink);
        }
      } catch (e) {
        console.error("Error initializing user:", e);
      }
    };

    initialize();
  }, [init, locale, setInitialLands, setLocale, tg, userId, userName]);

  return (
    <div className="text-slate-400 h-full overflow-auto">
      {!loading && isHashValid && <AccountView setShowReferals={setShowReferals} />}
      {loading && <LoadingScreen />}
      {!loading && isHashValid && <HomePage setShowReferals={setShowReferals} />}

      {!loading && !isHashValid && (
        <div className="h-full w-full flex justify-center items-center">Пользователь не авторизован</div>
      )}
      {/* <HomePage setShowReferals={setShowReferals} /> */}
      {showReferals && <Refferals setShowReferals={setShowReferals} />}
    </div>
  );
};

export default memo(Home);
