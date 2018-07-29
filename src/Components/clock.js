import React from 'react'
import moment from 'moment'

class Clock extends React.Component {
  render() {
    return (
      <div className='clock-container'>
        <h2>Session</h2>
        {moment().startOf('hour').seconds(this.props.sessionLength).format('mm:ss')}
      </div>
    )
  }
}

export default Clock
