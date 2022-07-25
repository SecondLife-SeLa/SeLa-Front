import './App.css';
import SelaHeader from './components/SelaHeader';
import {
} from 'semantic-ui-react'
import Banner from './components/mainBanner';
import Board from './components/mainBoard';

function App() {
  return (
    <div className="App">
      <SelaHeader/>
      <Banner/>
      <Board/>
    </div>
    
  );
}

export default App;
