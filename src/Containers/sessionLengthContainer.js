import { connect } from 'react-redux'
import SessionLength from '../Components/sessionLength'
import { increaseBreakTime, decreaseBreakTime } from '../Actions/breakLength'

const mapStateToProps = (state) => {
  return {
    sessionMeter: state.sessionReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incMeter: () => {
      dispatch(increaseBreakTime())
    },
    decMeter: () => {
      dispatch(decreaseBreakTime())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionLength)
