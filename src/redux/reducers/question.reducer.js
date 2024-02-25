import { combineReducers } from 'redux';

const questions = (state = [], action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return action.payload;
        case 'UNSET_QUESTIONS':
            return [];
        default:
            return state;
    }
}

export default combineReducers({
    // admin:
    questions,
});