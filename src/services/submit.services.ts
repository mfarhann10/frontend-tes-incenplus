import { axiosInstance } from "./axios";

export interface SubmitPayload {
  student_id: number
  student_answer_id: number
  student_answer: Array<{
    question_id: number
    answer_id: string
  }>
  duration: string
  timestamp: number
}



export const submitAnswer = async (payload: SubmitPayload) => {
    const response = await axiosInstance.post('/studentanswer/create', payload);
    return response.data;
}