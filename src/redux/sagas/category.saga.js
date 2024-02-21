import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCategories(action) {
    try {
        console.log('TODO fetch categories');

        // axios call

        // save to reducer
        
    } catch (error) {
        console.log('Error fetching categories:', error);
    }
}

function* categorySaga() {
    // Admin:
    yield takeLatest('FETCH_CATEGORIES', fetchCategories);
}

export default categorySaga;