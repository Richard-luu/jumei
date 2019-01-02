import { combineReducers } from 'redux';
import lunbo from './lunbo';
import city from './city';

export default combineReducers({
  lunbo: lunbo,
  city: city
})
