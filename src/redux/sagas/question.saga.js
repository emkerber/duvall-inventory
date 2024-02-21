import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchQuestionsByCategory(action) {
    try {
        console.log('TODO fetch questions by category');

        // axios call

        // save to reducer
        
    } catch (error) {
        console.log('Error fetching questions by category:', error);
    }
}

function* questionSaga() {
    // Admin:
    yield takeLatest('FETCH_QUESTIONS_BY_CATEGORY', fetchQuestionsByCategory);
}

export default questionSaga;