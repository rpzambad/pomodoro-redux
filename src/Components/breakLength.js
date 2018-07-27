import React from 'react'

class BreakLength extends React.Component {
  handleIncrement = () => {
    this.props.incMeter()
  }

  handleDecrement = () => {
    this.props.decMeter()
  }

  render() {
    return (
      <div className='break-container'>
        <h3>Break Length</h3>
        <button onClick={this.handleIncrement}>+</button>
        {this.props.breakMeter}
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default BreakLength
