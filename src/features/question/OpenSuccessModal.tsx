import { CheckCircle } from "lucide-react"
import Modal from "../../components/ui/Modal"
import { useEffect, useRef } from "react"

type OpenSuccessModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const OpenSuccessModal = ({ open, onOpenChange }: OpenSuccessModalProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open && triggerRef.current) {
      triggerRef.current.click()
    }
  }, [open])

  return (
    <Modal>
      <Modal.Open opens="open-success-modal">
        <button ref={triggerRef} className="hidden" />
      </Modal.Open>

      <Modal.Window name="open-success-modal">
        <div className="flex flex-col items-center gap-6 px-8 py-10 text-center">
          
          {/* Icon */}
          <CheckCircle className="h-20 w-20 text-green-500" />

          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Success!
            </h2>
            <p className="text-gray-600">
              You have completed all tests.
            </p>
          </div>

          {/* Action */}
          <button
            className="mt-4 rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
            onClick={() => {
              onOpenChange(false)
              window.location.reload()
            }}
          >
            Finish
          </button>
        </div>
      </Modal.Window>
    </Modal>
  )
}
