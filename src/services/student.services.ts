import { axiosInstance } from "./axios";

export interface CreateUserPayload {
  name: string;
  email: string;
  phone: string;
  age: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: string;
  study_plan: string | null;
  student_answer_id: number;
  set_question: string;
  created_at: string;
  updated_at: string;
}

interface UserResponse{
  data: User;
}

export const createUser = async (
  payload: CreateUserPayload
): Promise<UserResponse> => {
  const response = await axiosInstance.post<UserResponse>(
    `/create`,
    payload
  );
    return response.data;
};