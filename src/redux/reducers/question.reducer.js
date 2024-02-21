import { combineReducers } from 'redux';

const questionsByCategory = (state = {}, action) => {
    switch (action.type) {
        case 'SET_QUESTIONS_BY_CATEGORY':
            return action.payload;
        case 'UNSET_QUESTIONS_BY_CATEGORY':
            return {};
        default:
            return state;
    }
}

export default combineReducers({
    // admin:
    questionsByCategory,
});