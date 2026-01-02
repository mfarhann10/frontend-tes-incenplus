// components/TestStepper.tsx
import { cn } from "../lib/utils"
import { useTestSessionStore } from "../store/testSessionStore"

const steps = [
  { id: 1, label: "Student Profile" },
  { id: 2, label: "Question (1 - 6)" },
  { id: 3, label: "Question (7 - 12)" },
  { id: 4, label: "Question (13 - 18)" },
  { id: 5, label: "Question (19 - 24)" },
  { id: 6, label: "Writing Task" },
]

export const Stepper = () => {
  const currentStep = useTestSessionStore((s) => s.currentStep)

  return (
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep
        const isCompleted = step.id < currentStep

        return (
          <div key={step.id} className="flex items-center w-full">
            {/* Circle */}
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                isActive && "bg-blue-500 text-white",
                isCompleted && "bg-blue-100 text-blue-600",
                !isActive && !isCompleted && "bg-gray-200 text-gray-500"
              )}
            >
              {step.id}
            </div>

            {/* Label */}
            <span
              className={cn(
                "ml-2 text-sm whitespace-nowrap",
                isActive && "text-blue-600 font-medium",
                !isActive && "text-gray-500"
              )}
            >
              {step.label}
            </span>

            {/* Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-px bg-gray-200 mx-4" />
            )}
          </div>
        )
      })}
    </div>
  )
}
