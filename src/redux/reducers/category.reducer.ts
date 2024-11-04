import { AnyAction, combineReducers } from 'redux';

const categories = (state = [], action: AnyAction) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.payload;
        case 'UNSET_CATEGORIES':
            return [];
        default:
            return state;
    }
}

export default combineReducers({
    // admin:
    categories,
});