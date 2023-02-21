import "./App.css";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import TranslationPage from "./pages/TranslationPage/TranslationPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export default function App() {
  const loggedIn = false;
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {loggedIn ? (
          <SignInPage />
        ) : (
          <Routes>
            <Route exact path="/" element={<TranslationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}
