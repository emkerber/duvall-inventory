import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AllQuestionsPage() {
    const dispatch = useDispatch();

    // const categories = useSelector(store => store.category);

    // const questionsCatOne = useSelector(store => store.question.catOne);
    // const questionsCatTwo = useSelector(store => store.question.catTwo);
    // const questionsCatThree = useSelector(store => store.question.catThree);
    // const questionsCatFour = useSelector(store => store.question.catFour);

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