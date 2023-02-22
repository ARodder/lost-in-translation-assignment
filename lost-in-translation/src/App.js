import "./App.css";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import TranslationPage from "./pages/TranslationPage/TranslationPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./store/userSlice";

export default function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    if(storedUser && storedUser !== "undefined"){
      dispatch(setUser(JSON.parse(storedUser)));
    }
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {!user.username ? (
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
