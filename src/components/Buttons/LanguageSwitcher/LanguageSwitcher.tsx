import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../store/i18n/i18nSlice";
import { RootState } from "../../../store/store";
import { StyledButtonWrapper } from "./styles";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.i18n.language);

  const changeLanguage = (language: string) => {
    const lng = language === "pl" ? "en" : "pl";
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };

  return (
    <>
      <StyledButtonWrapper onClick={() => changeLanguage(language)}>
        {language === "pl" ? " EN" : "PL"}
      </StyledButtonWrapper>
    </>
  );
};

export default LanguageSwitcher;
