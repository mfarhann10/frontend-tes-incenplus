import { useSessionStore } from "../store/SessionStore"
import { useSubmitTest } from "../hooks/useSubmitTest"
import { useOutletContext } from "react-router-dom"

type OutletContext = {
  setOpenSuccess: (v: boolean) => void
}

export const NavigationButtons = () => {
  const { currentStep, nextStep, prevStep } = useSessionStore()
  const { setOpenSuccess } = useOutletContext<OutletContext>()

  const submitMutation = useSubmitTest(() => {
    setOpenSuccess(true)
  })

  const handleNext = () => {
    if (currentStep === 6) {
      submitMutation.mutate()
    } else {
      nextStep()
    }
  }

  return (
    <div className="flex justify-between mt-10">
      <button
        disabled={currentStep === 1}
        onClick={prevStep}
        className="px-6 py-2 border rounded disabled:opacity-50"
      >
        Previous
      </button>

      <button
        onClick={handleNext}
        className="px-6 py-2 bg-blue-600 text-white rounded"
        disabled={submitMutation.isPending}
      >
        {currentStep === 6 ? "Finish" : "Next"}
      </button>
    </div>
  )
}
