import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import BoardsReducer from './board_reducer';
import PinsReducer from './pins_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: BoardsReducer,
    pins: PinsReducer
});

export default entitiesReducer;