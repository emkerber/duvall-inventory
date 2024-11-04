import { combineReducers } from 'redux';
const categories = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.payload;
        case 'UNSET_CATEGORIES':
            return [];
        default:
            return state;
    }
};
export default combineReducers({
    // admin:
    categories,
});
