import { create } from "zustand"

interface AnswerState {
  answers: Record<number, number> // question_id -> answer_id
  essay: string

  setAnswer: (questionId: number, answerId: number) => void
  setEssay: (text: string) => void
  reset: () => void
}

export const useAnswerStore = create<AnswerState>((set) => ({
  answers: {},
  essay: "",

  setAnswer: (questionId, answerId) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answerId,
      },
    })),

  setEssay: (text) => set({ essay: text }),

  reset: () => set({ answers: {}, essay: "" }),
}))
