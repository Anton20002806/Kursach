import './App.css';
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage";
import TestPage from "./pages/testPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
      <div className="App">
        <HashRouter>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/test'} element={<TestPage />} />
                    <Route path={'/profile'} element={<ProfilePage />} />
        </HashRouter>

      </div>
  );
}

export default App;