import React from 'react'

class ClockController extends React.Component {

  handlePlay = () => {
    setInterval(this.props.startSessionTimer, 1000)
  }  

  render() {
    return (
      <div>
        <button onClick={this.handlePlay}>Play</button>
        <button>Pause</button>
      </div>
    )
  }
}

export default ClockController
