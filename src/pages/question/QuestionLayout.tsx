import { QuestionList } from "../../features/question/QuestionList"
import { Timer } from "../../features/Timer"

export const QuestionLayout = () => {
    return (
      <>
      <Timer/>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-2xl font-medium text-red-500">English Placement Test</h3>
            <p className="font-medium text-base text-center">
              Please read each sentence below and
              indicate your answer by clicking on the
              option. <br/>When you are finished, click
              the "Next" button at the the bottom.
            </p>
          </div>

          <QuestionList />
        </div>
      </>
    )
}