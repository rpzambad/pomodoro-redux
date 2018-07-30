import React from 'react'
import BreakLength from './Containers/breakLength'
import SessionLength from './Containers/sessionLengthContainer'
import ClockContent from './Containers/clockContainer'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        Pomodoro Clock
        <BreakLength />
        <SessionLength />
        <ClockContent />
      </div>
    )
  }
}

export default App
