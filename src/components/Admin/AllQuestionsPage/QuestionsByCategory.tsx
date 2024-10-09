import { useSelector } from 'react-redux';

function QuestionsByCategory({categoryId}) {
  const questions = useSelector((store: { question: { questions: {}[] } }) => store.question.questions);

  return (
    <>
      {questions?.filter(
        (q: { category_id: number }) => q.category_id === categoryId
      ).map((
        catQ: { 
          option_one: string, option_two: string, option_three: string, option_four: string, weight_one: number, weight_two: number, weight_three: number, weight_four: number, verbiage: string
        }, 
        i: number
      ) => (
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