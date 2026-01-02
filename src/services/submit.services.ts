import { axiosInstance } from "./axios";

export interface SubmitPayload {
  student_id: number
  student_answer_id: number
  student_answers: Array<{
    question_id: number
    answer_id: number | string
  }>
  duration: string
  timestamp: number
}

export const submitAnswer = async (payload: SubmitPayload) => {
  const formData = new URLSearchParams()

  formData.append("student_id", String(payload.student_id))
  formData.append("student_answer_id", String(payload.student_answer_id))
  formData.append(
    "student_answers",
    JSON.stringify(payload.student_answers)
  )
  formData.append("duration", payload.duration)
  formData.append("timestamp", String(payload.timestamp))

  const response = await axiosInstance.post(
    "/studentanswer/create",
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )

  return response.data
}

