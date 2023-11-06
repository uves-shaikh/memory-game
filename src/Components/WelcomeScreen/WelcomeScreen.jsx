import React, { useState } from 'react'
import './WelcomeScreen.css'

const WelcomeScreen = ({onPlay,onNameEntered}) => {

    const [userName,setUserName] = useState('')

    const handleNameChange = (event) => {
        setUserName(event.target.value)
    }

    const handleStartGame = () => {
        if(userName.trim()!== '') {
            localStorage.setItem('userName', userName)
            onNameEntered(userName)
            onPlay(userName)
        } else {
            alert('Please enter a valid name efore starting the game.')
        }
    }

    return (
        <div className='welcome-screen'>
            <div className="title">
                <h1>React Tile</h1>
            </div>
            <div className="input">
                <p>Enter Your Name:</p>
                <input type="text" value={userName} onChange={handleNameChange} />
                <button onClick={handleStartGame}>Play</button>
            </div>

        </div>
    )
}

export default WelcomeScreen