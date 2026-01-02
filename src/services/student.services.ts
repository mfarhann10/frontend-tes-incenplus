import { axiosInstance } from "./axios";

export interface CreateUserPayload {
  name: string;
  email: string;
  phone: string;
  age: string;
}

export interface CreateUserResponse {
  data: {
    id: number
    student_answer_id: number
    set_question: string
    name: string
    email: string
    phone: string
    age: string
  }
}


export const createUser = async (
  payload: CreateUserPayload
): Promise<CreateUserResponse> => {
  const response = await axiosInstance.post<CreateUserResponse>(
    "/create",
    payload
  )
  return response.data
}
