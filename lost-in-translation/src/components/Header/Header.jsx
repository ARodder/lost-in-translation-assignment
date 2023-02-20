import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h2 className="header-title">Lost in translation</h2>
      <div className="profile-button">
        <div className="profile-button-icon-wrapper">
          <span class="material-symbols-rounded account_circle">person_filled</span>
        </div>
        <span className="header-username-wrapper">Aleksander</span>
      </div>
    </div>
  );
}

export default Header;
