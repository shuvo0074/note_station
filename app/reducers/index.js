import { combineReducers } from 'redux';
import { commonReducer } from '../stacks/app/reducers';

const appReducers = combineReducers({
  app: commonReducer,
});

const reducers = (state, action) => {
  return appReducers(state, action);
};

export default reducers;
