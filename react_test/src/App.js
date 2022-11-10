import "./App.css";
import Messages from "./components/Messages";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Options from "./components/Options";
function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/profile" element={<Main />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/options" element={<Options />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
