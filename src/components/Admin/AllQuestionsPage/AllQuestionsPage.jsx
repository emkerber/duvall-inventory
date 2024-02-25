import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestionsByCategory from './QuestionsByCategory';
import './AllQuestionsPage.css';

function AllQuestionsPage() {
  const dispatch = useDispatch();

  const categories = useSelector(store => store.category.categories);

  useEffect(() => {
    dispatch({ type: 'FETCH_CATEGORIES' });
    dispatch({ type: 'FETCH_QUESTIONS' });
  }, []);

  return (
    <>
      <h1>All Questions</h1>

      {categories.map((category, i) => (
        <div key={i}>
          
          <h2>{category.desirable} - {category.undesirable}</h2>

          <QuestionsByCategory 
            categoryId={category.id}
          />

        </div>
      ))}
      
    </>
  );
}

export default AllQuestionsPage;