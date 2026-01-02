import type { SubmitPayload } from "../../services/submit.services"
import { useAnswerStore } from "../../store/answerStore"
import { useSessionStore } from "../../store/SessionStore"

export const buildSubmitPayload = (): SubmitPayload => {
  const { answers, essay } = useAnswerStore.getState()
  const { studentId, studentAnswerId, duration } = useSessionStore.getState()
  
  const minutes = Math.floor(duration / 60)
  const seconds = duration % 60
  const formattedDuration = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

  return {
    student_id: studentId!,
    student_answer_id: studentAnswerId!,
    student_answers: [
      ...Object.entries(answers).map(([qId, aId]) => ({
        question_id: Number(qId),
        answer_id: aId,
      })),
      {
        question_id: 999,
        answer_id: essay,
      },
    ],
    duration: formattedDuration,
    timestamp: Date.now(),
  }

}
