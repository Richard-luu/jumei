import { connect } from 'react-redux';
import Center from '@/components/Home/HomeCenter';

const mapStateToProps = (state, props) => {
  return {
    data: state.city.curCity
  }
}

export default connect(
  mapStateToProps
)(Center);
