import { axiosInstance } from "./axios";

export interface SubmitPayload {
  student_id: number;
  student_answer_id: number;
  student_answer: Array<{ question_id: number; answer_id: number }>;
  duration: number;
  timestamp: string;
}

export const submitAnswer = async (payload: SubmitPayload) => {
    const response = await axiosInstance.post('/studentanswer/create', payload);
    return response.data;
}