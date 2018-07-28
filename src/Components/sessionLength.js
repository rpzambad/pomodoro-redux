import React from 'react'

class SessionLength extends React.Component {
  handleIncrement = () => {
    this.props.incMeter()
  }

  handleDecrement = () => {
    this.props.decMeter()
  } 

  render() {
    return (
      <div className='session-container'>
        <h3>Session Length</h3>
        <button onClick={this.handleIncrement}>+</button>
        {this.props.sessionMeter}
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default SessionLength
