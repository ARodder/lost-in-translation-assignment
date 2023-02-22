import "./SignInPage.css";
import InputField from "../../components/InputField/InputField"
import RobotImage from "../../assets/Logo-Hello.png"
import { useDispatch } from "react-redux";
import { getUserAsync, setUser } from "../../store/userSlice";

/**
 * Builds a signInPage to allow users to log in.
 * 
 * @returns {JSX.Element} The rendered SignInPage page.
 */
function SignInPage(){
   const dispatch = useDispatch();

   function submitUsername(username){
      dispatch(getUserAsync(username));
   }

   return (
      <div className="SignInPage">
         <div className="sign-in-page-container">
            <img src={RobotImage} className="sign-in-page-icon"/>
            <div className="sign-in-page-title-wrapper">
               <h1>Lost in Translation</h1>
               <h2>Get started</h2>
            </div>
         </div>
         <div className="sign-in-field-positioner">
         <InputField placeholder={"Whats your name?"} onSubmit={submitUsername}/>
         </div>
      </div>
   )
}
export default SignInPage;