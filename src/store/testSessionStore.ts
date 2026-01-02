import { create } from "zustand"

export type TestStep = 1 | 2 | 3 | 4 | 5 | 6

interface TestSessionState {
  studentId: number | null
  studentAnswerId: number | null
  setQuestion: string | null
  currentStep: TestStep

  setSession: (data: {
    studentId: number
    studentAnswerId: number
    setQuestion: string
  }) => void

  setStep: (step: TestStep) => void
  nextStep: () => void
  prevStep: () => void
}

export const useTestSessionStore = create<TestSessionState>((set) => ({
  studentId: null,
  studentAnswerId: null,
  setQuestion: null,
  currentStep: 1,

  setSession: (data) => set(data),

  setStep: (step) => set({ currentStep: step }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 6) as TestStep,
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1) as TestStep,
    })),
}))
