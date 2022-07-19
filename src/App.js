import logo from './logo.svg';
import './App.css';


const PokedexHeader = ({name}) => {
  return (
    <h1>This is a Header  for {name} Pokedex!</h1>
  )
}

function App() {
  return (
    <div className="App">
      <PokedexHeader name={"Jimin"}/>
    </div>
  );
}

export default App;
