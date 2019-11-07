import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import BoardsReducer from './board_reducer';
import PinsReducer from './pins_reducer';
import BoardPinsReducer from './board_pins_reducer';
import FollowsReducer from './follows_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: BoardsReducer,
    pins: PinsReducer,
    board_pins: BoardPinsReducer,
    follows: FollowsReducer

});

export default entitiesReducer;