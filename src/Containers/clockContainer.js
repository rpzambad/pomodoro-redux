import { connect } from 'react-redux'
import Clock from '../Components/clock'

const mapStateToProps = (state) => {
  return {
    sessionLength: state.sessionReducer,
  }
}

export default connect(mapStateToProps)(Clock)
