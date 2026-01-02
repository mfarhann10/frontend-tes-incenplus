import { axiosInstance } from "./axios";

export interface CreateUserPayload {
  name: string;
  email: string;
  phone: string;
  age: string;
}

export interface CreateUserResponse {
  data: {
    id: number;
    student_answer_id: number;
    set_question: string;
    student_plan: string | null;
    name: string;
    email: string;
    phone: string;
    age: string;
  }
}

export const createUser = async (
  payload: CreateUserPayload
): Promise<CreateUserResponse> => {
  const response = await axiosInstance.post<CreateUserResponse>(
    "/student/create",
    payload
  )
  return response.data
}
