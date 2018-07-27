import React from 'react'
import BreakLength from './Containers/breakLength'
import SessionLength from './Components/sessionLength'
import Clock from './Components/clock'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        Pomodoro Clock
        <BreakLength />
        <SessionLength />
        <Clock />
      </div>
    )
  }
}

export default App
