import React from 'react'
import BreakLength from './Containers/breakLength'
import SessionLength from './Containers/sessionLengthContainer'
import Clock from './Containers/clockContainer'
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
