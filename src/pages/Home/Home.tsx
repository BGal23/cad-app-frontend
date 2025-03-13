import {} from "./styles";
import "../../../i18n";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return <>{t("homePage")}</>;
};

export default Home;
