import { useMutation } from "@tanstack/react-query"
import { submitAnswer } from "../services/submit.services"
import { buildSubmitPayload } from "../features/question/buildSubmitPayload"

export const useSubmitTest = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: () => submitAnswer(buildSubmitPayload()),
    onSuccess,
  })
}
