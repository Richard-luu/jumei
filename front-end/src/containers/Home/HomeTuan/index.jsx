import { connect } from 'react-redux';
import Tuan from '@/components/Home/HomeTuan/index.jsx';

const mapStateToProps = (state, props) => {
  return {
    data: state.city.curCity
  }
}

export default connect(
  mapStateToProps
)(Tuan);
