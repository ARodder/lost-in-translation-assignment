import { useDispatch, useSelector } from "react-redux";
import BsPersonFill from "../../components/BsPersonFill/BsPersonFill";
import TranslationCard from "../../components/TranslationCard/TranslationCard";
import CgLogOut from "../../components/CgLogOut/CgLogOut";
import "./ProfilePage.css";
import { setUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
   const user = useSelector(state=>state.user);
   const navigate = useNavigate();
   const dispatch = useDispatch();

  return (
    <div className="ProfilePage">
      <div className="profile-display-wrapper">
      <div className="profile-display">
        <div className="profile-picture-wrapper">
          <BsPersonFill height="10rem" width="10rem" className="bs-person-fill"/>
        </div>
        <span className="profile-username-wrapper">{user.username}</span>
      </div>
      <CgLogOut height="10rem" width="10rem" className="cg-log-out" onClick={()=>{dispatch(setUser({}));navigate("/")}}/>
      </div>
      

      <div className="translation-history-wrapper">
         <h1>Translation History</h1>
         <div className="translation-history-display">
            {
               user.translate ? user.translate.map(elem => <TranslationCard sentence={elem} />): null
            }
         </div>
      </div>
    </div>
  );
}
