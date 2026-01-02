import { useQuery } from "@tanstack/react-query"
import { useTestSessionStore } from "../store/testSessionStore"
import { getQuestionList } from "../services/question.services"

export const useGetQuestions = () => {
  const { studentId, setQuestion } = useTestSessionStore()

  const {data: questions, isPending: isGetQuestions} = useQuery({
    queryKey: ["questions", studentId, setQuestion],
    queryFn: () => getQuestionList(studentId!, setQuestion!),
    enabled: !!studentId && !!setQuestion ,
  })

  return {questions, isGetQuestions}
}