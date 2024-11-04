import { useSelector } from 'react-redux';

function QuestionsByCategory(
  props: {
    categoryId: string
  }
) {
  
  const questions = useSelector((
    store: {
      question: {
        questions: {
          category_id: string,
          verbiage: string,
          option_one: string,
          option_two: string,
          option_three: string,
          option_four: string,
          weight_one: string,
          weight_two: string,
          weight_three: string,
          weight_four: string
        }[]
      }
    }
  ) => store.question.questions);

  return (
    <>
      {questions?.filter(
        q => q.category_id === props.categoryId
      ).map((catQ, i) => (
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