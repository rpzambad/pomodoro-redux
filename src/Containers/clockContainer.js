import { connect } from 'react-redux'
import Clock from '../Components/clock'

const mapStateToProps = (state) => {
  return {
    breakLength: state.breakReducer,
  }
}

export default connect(mapStateToProps)(Clock)
