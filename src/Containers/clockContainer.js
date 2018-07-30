import React from 'react'
import { connect } from 'react-redux'
import Clock from '../Components/clock'
import ClockController from '../Components/clockController'
import { startTimer, pauseTimer } from '../Actions/clockActions'

const ClockContent = (props) => {
  return (
    <div>
      <Clock {...props} />
      <ClockController {...props} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sessionLength: state.sessionReducer,
    clock: state.clockReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTime: () => {
      dispatch(startTimer())
    },
    pauseTime: () => {
      dispatch(pauseTimer())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockContent)
