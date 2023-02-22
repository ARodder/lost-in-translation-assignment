import InputField from "../../components/InputField/InputField";
import "./TranslationPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setTranslationAsync } from "../../store/userSlice";

/**
 * Builds a translation page to allow the user to generate a translation.
 * 
 * @returns {JSX.Element} The rendered TranslationPage page.
 */
function TranslationPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [currentTranslation, setCurrentTranslation] = useState("");
  function onTranslate(input) {
    setCurrentTranslation(input);
    let newTranslations = [...user.translations];
    newTranslations.unshift(input);
    if (newTranslations.length > 10)
      newTranslations.splice(
        newTranslations.length - 1,
        newTranslations.length
      );
    dispatch(
      setTranslationAsync({ id: user.id, translations: newTranslations })
    );
  }
  return (
    <div className="TranslationPage">
      <div className="translation-page-search-field">
        <InputField placeholder={"Translation..."} onSubmit={onTranslate} />
      </div>
      <h1 className="translation-display-header">Translation</h1>
      <div className="translation-display-wrapper">
        <div className="translation-display">
          <div className="translation">
            {currentTranslation
              .toLowerCase()
              .replaceAll(" ", "")
              .split("")
              .map((letter, index) =>
                /[a-z]/.test(letter) ? (
                  <img
                    className="translation-display-letter"
                    alt={letter}
                    key={"translated-letter-" + letter + "-" + index}
                    src={require("../../assets/individual_signs/" +
                      letter +
                      ".png")}
                  />
                ) : null
              )}
          </div>
          <div className="translation-display-decorative-line"></div>
        </div>
      </div>
    </div>
  );
}

export default TranslationPage;
