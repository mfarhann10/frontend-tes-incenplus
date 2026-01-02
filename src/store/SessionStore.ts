import { create } from "zustand"

export type Step = 1 | 2 | 3 | 4 | 5 | 6

interface SessionState {
  studentId: number | null
  studentAnswerId: number | null
  setQuestion: string | null
  currentStep: Step

  setSession: (data: {
    studentId: number
    studentAnswerId: number
    setQuestion: string
  }) => void

  setStep: (step: Step) => void
  nextStep: () => void
  prevStep: () => void
  duration: number
  setDuration: (duration: number) => void
}

export const useSessionStore = create<SessionState>((set) => ({
  studentId: null,
  studentAnswerId: null,
  setQuestion: null,
  currentStep: 1,
  duration: 0,

  setSession: (data) => set(data),

  setStep: (step) => set({ currentStep: step }),

  setDuration: (duration) => set({ duration }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 6) as Step,
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1) as Step,
    })),
}))
