import InputField from "../../components/InputField/InputField";
import "./TranslationPage.css";

function TranslationPage() {
  return (
    <div className="TranslationPage">
      <div className="translation-page-search-field">
        <InputField placeholder={"Translation..."} />
      </div>
      <div className="translation-display-wrapper">
        <div className="translation-display">
          <div className="translation">
            
          </div>
          <div className="translation-display-decorative-line"></div>
        </div>
      </div>
    </div>
  );
}

export default TranslationPage;
