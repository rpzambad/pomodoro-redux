import { connect } from 'react-redux'
import SessionLength from '../Components/sessionLength'
import { increaseSessionTime, decreaseSessionTime } from '../Actions/sessionLength'

const mapStateToProps = (state) => {
  return {
    sessionMeter: state.sessionReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incSessionMeter: () => {
      dispatch(increaseSessionTime())
    },
    decSessionMeter: () => {
      dispatch(decreaseSessionTime())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionLength)
