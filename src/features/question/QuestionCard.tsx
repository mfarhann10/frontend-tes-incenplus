import type { QuestionListResponse } from "../../services/question.services"
import { useAnswerStore } from "../../store/answerStore"


export const QuestionCard = ({ question }: { question: QuestionListResponse }) => {
  const { answers, setAnswer } = useAnswerStore()

  return (
    <div className="border rounded-lg p-4 bg-white">
      <p className="font-medium mb-4">{question.question}</p>

      <div className="space-y-2">
        {question.option.map((opt) => (
          <label key={opt.id} className="flex items-center gap-2">
            <input
              type="radio"
              name={`q-${question.id}`}
              checked={answers[question.id] === opt.id}
              onChange={() => setAnswer(question.id, opt.id)}
            />
            {opt.text}
          </label>
        ))}
      </div>
    </div>
  )
}
