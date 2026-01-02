import { useAnswerStore } from "../../store/answerStore"

export const EssayQuestion = () => {
  const { essay, setEssay } = useAnswerStore()

  return (
    <div className="bg-white p-6 rounded-lg">
      <p className="font-medium mb-4">
        25. Please write a paragraph on the following subject, "Why learning english is important for me"
      </p>

      <textarea
        className="w-full border rounded p-3 min-h-[200px]"
        value={essay}
        onChange={(e) => setEssay(e.target.value)}
      />
    </div>
  )
}