import './App.css';
import Header from './components/Header/Header';
import SignInPage from './pages/SignInPage/SignInPage';
import TranslationPage from './pages/TranslationPage/TranslationPage';

function App() {
  return (
    <div className="App">
      <Header />
      {
        false ? 
        <SignInPage /> 
        : <TranslationPage />
      }
    </div>
  );
}

export default App;
