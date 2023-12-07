import './App.css';
import {HashRouter, NavLink, Route, Router, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path='/' element={<MainPage />}/>
              <Route path='/header' element={<ProfilePage />}/>
          </Routes>
      </HashRouter>

  );
}

export default App;