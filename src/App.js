import "./App.css";
import {} from "semantic-ui-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/mainBanner";
import Board from "./components/mainBoard";
import Menu from "./components/menuHeader";
import Community from "./community/communityBody";
import Talent from "./talents/talentBody";
import Login from "./components/Login";
import SelaHeader from "./components/SelaHeader";
import {} from "semantic-ui-react";
import MainPage from "./components/MainPage";
import Job from "./components/Job";
import Management from "./components/management";
import TextArea from "./community/textArea";
import TalentArea from "./talents/talentArea";
import Register from "./components/register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SelaHeader />
        <Menu/>
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/job" element={<Job />} />
          <Route path="/management" element={<Management />} />
          <Route path="/textArea" element={<TextArea />} />
          <Route path="/talentArea" element={<TalentArea />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <SelaHeader/>
    //   <Banner/>
    //   <Board/>
    //   <Menu/>
    //   <Community/>
    //   <Talent/>
    //   <TextBoard/>
    //   <TalentBoard/>
    // </div>
  );
}

export default App;
