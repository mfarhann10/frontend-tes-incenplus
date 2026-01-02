import { axiosInstance } from "./axios";

interface Option{
    id: number;
    question_id: number;
    key: string;
    text: string;
    is_true: number;
}

export interface QuestionListResponse{
    id: number;
    question: string;
    is_acitve: number;
    created_at: string;
    updated_at: string;
    option: Option[];
}

export const getQuestionList = async (
    student_id: number,
    set_question: string
    ): Promise<QuestionListResponse[]> => {
        const response = await axiosInstance.get<QuestionListResponse[]>(
            `/question/list`,
            {
            params: { student_id, set_question }
            }
        );

    return response.data;
};

