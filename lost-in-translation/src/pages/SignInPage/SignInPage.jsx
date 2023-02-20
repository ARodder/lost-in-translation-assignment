import "./SignInPage.css";
import InputField from "../../components/InputField/InputField"
import RobotImage from "../../assets/robot_icon.png"

function SignInPage(){

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
         <InputField placeholder={"Whats your name?"}/>
         </div>
      </div>
   )
}
export default SignInPage;