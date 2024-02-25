import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchQuestions(action) {
    try {
        // axios call
        const questions = yield axios.get('/api/question');

        // save to reducer
        yield put({ type: 'SET_QUESTIONS', payload: questions.data });

    } catch (error) {
        console.log('Error fetching questions:', error);
    }
}

function* questionSaga() {
    // Admin:
    yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
}

export default questionSaga;