import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCategories(action) {
    try {
        // axios call
        const categories = yield axios.get('/api/category');

        // save to reducer
        yield put({ type: 'SET_CATEGORIES', payload: categories.data });
        
    } catch (error) {
        console.log('Error fetching categories:', error);
    }
}

function* categorySaga() {
    // Admin:
    yield takeLatest('FETCH_CATEGORIES', fetchCategories);
}

export default categorySaga;