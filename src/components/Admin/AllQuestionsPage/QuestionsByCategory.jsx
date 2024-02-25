import { useSelector } from 'react-redux';

function QuestionsByCategory({categoryId}) {
  const questions = useSelector(store => store.question.questions);

  return (
    <>
      {questions?.filter(q => q.category_id === categoryId).map((catQ, i) => (
          <div key={i} className="admin-one-question">
            <p>{catQ.verbiage}</p>
            <ul>
              <li>{catQ.option_one} : {catQ.weight_one}</li>
              <li>{catQ.option_two} : {catQ.weight_two}</li>
              <li>{catQ.option_three} : {catQ.weight_three}</li>
              <li>{catQ.option_four} : {catQ.weight_four}</li>
            </ul>
          </div>
      ))}
    </>
  )
}

export default QuestionsByCategory;