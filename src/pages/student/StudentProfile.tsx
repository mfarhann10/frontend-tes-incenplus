import { CreateStudentForm } from "../../features/student/CreateStudentForm"

export const StudentProfile = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold text-gray-500 text-center">Student Details</h1>
            <CreateStudentForm/>
        </div>
    )
}