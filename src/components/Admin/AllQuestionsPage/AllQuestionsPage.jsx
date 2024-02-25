import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AllQuestionsPage() {
    const dispatch = useDispatch();

    const categories = useSelector(store => store.category.categories);

    const questions = useSelector(store => store.question.questionsByCategory);

    console.log('categories:', categories);
    console.log('questions:', questions);

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORIES' });
        dispatch({ type: 'FETCH_QUESTIONS_BY_CATEGORY' });
    }, []);

    return (
        <>
            <h1>All Questions</h1>

            
        </>
    );
}

export default AllQuestionsPage;