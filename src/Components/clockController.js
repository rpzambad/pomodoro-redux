import React from 'react'
var interval

class ClockController extends React.Component {  

  handlePlay = () => {
    if (!interval) {
      interval = setInterval(this.props.startTime, 1000)
    }
  }

  handlePause = () => {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    )
  }
}

export default ClockController
