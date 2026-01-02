import { cn } from "../lib/utils"
import { useSessionStore } from "../store/SessionStore"

const steps = [
  { id: 1, label: "Student Profile" },
  { id: 2, label: "Question (1 - 6)" },
  { id: 3, label: "Question (7 - 12)" },
  { id: 4, label: "Question (13 - 18)" },
  { id: 5, label: "Question (19 - 24)" },
  { id: 6, label: "Writing Task" },
]

export const Stepper = () => {
  const currentStep = useSessionStore((s) => s.currentStep)
  const currentStepData = steps.find((s) => s.id === currentStep)
  const progress = (currentStep / steps.length) * 100

  return (
    <>
      <div className="block lg:hidden mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {currentStepData?.label}
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between w-full mb-8">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep
          const isCompleted = step.id < currentStep

          return (
            <div key={step.id} className="flex items-center w-full">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors",
                  isActive && "bg-blue-500 text-white",
                  isCompleted && "bg-blue-100 text-blue-600",
                  !isActive && !isCompleted && "bg-gray-200 text-gray-500"
                )}
              >
                {step.id}
              </div>

              <span
                className={cn(
                  "ml-2 text-sm whitespace-nowrap transition-colors",
                  isActive && "text-blue-600 font-medium",
                  isCompleted && "text-blue-600 font-medium",
                  !isActive && !isCompleted && "text-gray-500"
                )}
              >
                {step.label}
              </span>

              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-px mx-4 transition-colors",
                    isCompleted ? "bg-blue-500" : "bg-gray-200"
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
