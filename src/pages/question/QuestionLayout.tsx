import { Stepper } from "../../components/Stepper"

export const QuestionLayout = ({children} : {children?: React.ReactNode}) => {
    return (
        <div>
            <Stepper/>
            {children}
        </div>
    )
}