import React from 'react'
import moment from 'moment'

class BreakLength extends React.Component {

  render() {
    return (
      <div className='break-container'>
        <h3>Break Length</h3>
        <button onClick={this.props.incBreakMeter}>+</button>
        {moment().startOf('hour').seconds(this.props.breakMeter).format('mm:ss')}
        <button onClick={this.props.decBreakMeter}>-</button>
      </div>
    )
  }
}

export default BreakLength
