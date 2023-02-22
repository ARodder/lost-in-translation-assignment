import { useDispatch, useSelector } from "react-redux";
import BsPersonFill from "../../components/BsPersonFill/BsPersonFill";
import TranslationCard from "../../components/TranslationCard/TranslationCard";
import CgLogOut from "../../components/CgLogOut/CgLogOut";
import "./ProfilePage.css";
import { removeUser, setTranslationAsync } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

/**
 * Builds a profile-page based on the profile of the logged in user.
 * 
 * @returns {JSX.Element} The rendered ProfilePage page.
 */
export default function ProfilePage() {
   const user = useSelector(state=>state.user);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   function onDeleteTranslationHistory(){
    dispatch(setTranslationAsync({id:user.id,translations:[]}));
   }

  return (
    <div className="ProfilePage">
      <div className="profile-display-wrapper">
      <div className="profile-display">
        <div className="profile-picture-wrapper">
          <BsPersonFill height="10rem" width="10rem" className="bs-person-fill"/>
        </div>
        <span className="profile-username-wrapper">{user.username}</span>
      </div>
      <CgLogOut height="10rem" width="10rem" className="cg-log-out" onClick={()=>{dispatch(removeUser());navigate("/")}}/>
      </div>
      

      <div className="translation-history-wrapper">
        <div className="translation-history-title-button-wrapper">
         <h1>Translation History</h1>
         <button className="translation-history-delete-button" onClick={onDeleteTranslationHistory}>Delete history</button>
        </div>
         <div className="translation-history-display">
            {
               user.translations ? user.translations.map(elem => <TranslationCard sentence={elem} />): null
            }
         </div>
      </div>
    </div>
  );
}
