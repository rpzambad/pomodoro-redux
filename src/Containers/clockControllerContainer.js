import { connect } from 'react-redux'
import ClockController from '../Components/clockController'
import { startTimer, pauseTimer } from '../Actions/clockActions'

const mapStateToProps = (state) => {
  return {
    clockTimer: state.sessionReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSessionTimer: () => {
      dispatch(startTimer())
    },
    pauseSessionTimer: () => {
      dispatch(pauseTimer())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockController) 
