// 创建 仓库
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
