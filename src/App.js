import { useState } from 'react';
import './App.css';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import Cards from './Components/Cards/Cards';
import SuccessScreen from './Components/SuccessScreen/SuccessScreen';

function App() {

  const [userName, setUserName] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)

  const handleNameEntered = (name) => {
    setUserName(name)
  }

  const handleStartGame = (name) => {
    setGameStarted(true)
  }

  const handleGameComplete = () => {
    setGameCompleted(true)
  }

  return (
    <>
      {!gameStarted && !gameCompleted && (
        <WelcomeScreen onNameEntered={handleNameEntered} onPlay={handleStartGame} />
      )}

      {gameStarted && !gameCompleted && (
        <Cards onGameComplete={handleGameComplete} userName={userName} />
      )}

      {gameCompleted && <SuccessScreen userName={userName} />}

    </>
  );
}

export default App;