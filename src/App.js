import './App.css';
import SelaHeader from './components/SelaHeader';
import {
} from 'semantic-ui-react'
import Banner from './components/mainBanner';
import Board from './components/mainBoard';
import Menu from './community/menuHeader';
import Community from './community/communityBody';
import Talent from './talents/talentBody';
import TextBoard from './community/textArea'
import TalentBoard from './talents/talentArea'

function App() {
  return (
    <div className="App">
      <SelaHeader/>
      <Banner/>
      <Board/>
      <Menu/>
      <Community/>
      <Talent/>
      <TextBoard/>
      <TalentBoard/>
    </div>
    
  );
}

export default App;
