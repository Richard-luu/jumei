import { connect } from 'react-redux';
import Shop from '@/components/Home/HomeShop';

const mapStateToProps = (state, props) => {
  return {
    data: state.city.curCity
  }
}

export default connect(
  mapStateToProps
)(Shop);
