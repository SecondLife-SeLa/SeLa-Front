import './App.css';
import {
} from 'semantic-ui-react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from './components/mainBanner';
import Board from './components/mainBoard';
import Menu from './community/menuHeader';
import Community from './community/communityBody';
import Talent from './talents/talentBody';
import TextBoard from './community/textArea'
import TalentBoard from './talents/talentArea'
import Login from './components/Login';
import SelaHeader from "./components/SelaHeader";
import {} from "semantic-ui-react";
import MainPage from "./components/mainPage";
import Job from "./components/job";
import Management from "./components/management";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <SelaHeader/>
        <Banner/>
        <Board/>
        <TalentBoard/>
        <Routes>
          <Route path="/community" element={<Community/>} />
          <Route path="/talent" element={<Talent/>} />
          <Route path="/comboard" element={<TextBoard/>} />
          <Route path="/talboard" element={<TalentBoard/>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/job" element={<Job />} />
          <Route path="/management" element={<Management />} />
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
