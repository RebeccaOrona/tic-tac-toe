import { Logo } from './components/Logo';
import './App.css';
import { GameLogic } from './components/GameLogic';




function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Logo/>
        <GameLogic/>
      </div>
    </div>
  );
}

export default App;
