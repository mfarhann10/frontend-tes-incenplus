
import { useGetQuestions } from "../../hooks/useGetQuestions"
import { STEP_QUESTION_RANGE } from "../../lib/questionRange"
import { useSessionStore } from "../../store/SessionStore"
import { NavigationButtons } from "../NavigationButtons"
import { EssayQuestion } from "./EssayQuestion"
import { QuestionCard } from "./QuestionCard"


export const QuestionList = () => {
  const { currentStep } = useSessionStore()
  const { questions, isGetQuestions } = useGetQuestions()

  if (isGetQuestions) return <p>Loading...</p>

  if (!questions) return null

  // Essay step
  if (currentStep === 6) {
    return (
      <>
        <EssayQuestion />
        <NavigationButtons />
      </>
    )
  }

  const [start, end] = STEP_QUESTION_RANGE[currentStep]
  const currentQuestions = questions.slice(start, end)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentQuestions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
      <NavigationButtons />
    </>
  )
}
