import React from 'react'
import BreakLength from './Containers/breakLength'
import SessionLength from './Containers/sessionLengthContainer'
import Clock from './Containers/clockContainer'
import ClockController from './Containers/clockControllerContainer'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        Pomodoro Clock
        <BreakLength />
        <SessionLength />
        <Clock />
        <ClockController />
      </div>
    )
  }
}

export default App
