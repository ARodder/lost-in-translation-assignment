import BsPersonFill from "../../components/BsPersonFill/BsPersonFill";
import TranslationCard from "../../components/TranslationCard/TranslationCard";
import "./ProfilePage.css";

export default function ProfilePage() {
   const translationHistory = ["hello","world","one big alpaca"," one small mouse"];
  return (
    <div className="ProfilePage">
      <div className="profile-display">
        <div className="profile-picture-wrapper">
          <BsPersonFill height="10rem" width="10rem" className="bs-person-fill"/>
        </div>
        <span className="profile-username-wrapper">Aleksander</span>
      </div>

      <div className="translation-history-wrapper">
         <h1>Translation History</h1>
         <div className="translation-history-display">
            {
               translationHistory.map(elem => <TranslationCard sentence={elem} />)
            }
         </div>
      </div>
    </div>
  );
}
