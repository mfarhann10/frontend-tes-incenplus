import type { SubmitPayload } from "../../services/submit.services"
import { useAnswerStore } from "../../store/answerStore"
import { useSessionStore } from "../../store/SessionStore"

export const buildSubmitPayload = (): SubmitPayload => {
  const { answers, essay } = useAnswerStore.getState()
  const { studentId, studentAnswerId } = useSessionStore.getState()

  return {
    student_id: studentId!,
    student_answer_id: studentAnswerId!,
    student_answer: [
      // pilihan ganda
      ...Object.entries(answers).map(([questionId, answerId]) => ({
        question_id: Number(questionId),
        answer_id: answerId,
      })),

      // essay WAJIB
      {
        question_id: 999,
        answer_id: "0" || essay,
      },
    ],

    duration: "25:30",           // menit:detik ✅
    timestamp: Date.now(),       // unix ms ✅
  }
}
