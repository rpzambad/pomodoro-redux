import { connect } from 'react-redux'
import BreakLength from '../Components/breakLength'
import { increaseBreakTime, decreaseBreakTime } from '../Actions/breakLength'

const mapStateToProps = (state) => {
  return {
    breakMeter: state.breakReducer,
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

export default connect(mapStateToProps, mapDispatchToProps)(BreakLength)
