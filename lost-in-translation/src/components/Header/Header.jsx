import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";

/**
 * A React component that renders a header with a title and a profile button if the user is logged in.
 * @function Header
 * @returns {JSX.Element} A React element representing the header.
 */
function Header() {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  return (
    <div className="Header">
      <h2 className="header-title" onClick={()=>navigate("/")}>Lost in translation</h2>
      {
        user.username ?
        <div className="profile-button" onClick={()=>navigate("/profile")}>
        <div className="profile-button-icon-wrapper">
          <span className="material-symbols-rounded account_circle">person_filled</span>
        </div>
        <span className="header-username-wrapper">{user.username}</span>
      </div>
      : null
      }
    </div>
  );
}

export default Header;
