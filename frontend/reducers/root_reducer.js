import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer'

export const rootReducer = combineReducers({
    errors: errorsReducer,
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer
})