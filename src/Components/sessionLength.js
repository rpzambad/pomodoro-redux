import React from 'react'
import moment from 'moment'

class SessionLength extends React.Component { 

  render() {
    return (
      <div className='session-container'>
        <h3>Session Length</h3>
        <button onClick={this.props.incSessionMeter}>+</button>
        {moment().startOf('hour').seconds(this.props.sessionMeter).format('mm:ss')}
        <button onClick={this.props.decSessionMeter}>-</button>
      </div>
    )
  }
}

export default SessionLength
