import type { SubmitPayload } from "../../services/submit.services"
import { useAnswerStore } from "../../store/answerStore"
import { useSessionStore } from "../../store/SessionStore"

export const buildSubmitPayload = (): SubmitPayload => {
  const { answers, essay } = useAnswerStore.getState()
  const { studentId, studentAnswerId } = useSessionStore.getState()


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
    duration: "25:30",
    timestamp: Date.now(),
  }

}
