import { create } from "zustand"

interface TestSessionState {
  studentId: number | null
  studentAnswerId: number | null
  setQuestion: string | null
  currentStep: number

  setSession: (data: {
    studentId: number
    studentAnswerId: number
    setQuestion: string
  }) => void

  nextStep: () => void
  prevStep: () => void
  reset: () => void
}

export const useTestSessionStore = create<TestSessionState>((set) => ({
  studentId: null,
  studentAnswerId: null,
  setQuestion: null,
  currentStep: 1,

  setSession: ({ studentId, studentAnswerId, setQuestion }) =>
    set({
      studentId,
      studentAnswerId,
      setQuestion,
    }),

  nextStep: () =>
    set((state) => ({ currentStep: state.currentStep + 1 })),

  prevStep: () =>
    set((state) => ({ currentStep: state.currentStep - 1 })),

  reset: () =>
    set({
      studentId: null,
      studentAnswerId: null,
      setQuestion: null,
      currentStep: 1,
    }),
}))