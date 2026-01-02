import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { createUser } from "../../services/student.services";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  age: z.string().min(1, "Age must be at least 1 character long"),
})

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
}

export const CreateStudentForm = () => {

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const {register, handleSubmit, reset, formState, } = methods;
  const {errors} = formState;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createUser(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  })

  return (
    <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold text-gray-500 text-center">Student Details</h1>

        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-2">
                <input 
                  className="border border-gray-300 rounded w-full px-2.5 py-1.5 placeholder:text-gray-400" 
                  type="text" 
                  placeholder="Student name(In English)" 
                  {...register("name")} 
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  className="border border-gray-300 rounded w-full px-2.5 py-1.5 placeholder:text-gray-400" 
                  type="text" 
                  placeholder="Email Address" 
                  {...register("email")} 
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  className="border border-gray-300 rounded w-full px-2.5 py-1.5 placeholder:text-gray-400" 
                  type="text" 
                  placeholder="Phone Number" 
                  {...register("phone")} 
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  className="border border-gray-300 rounded w-full px-2.5 py-1.5 placeholder:text-gray-400" 
                  type="text" 
                  placeholder="Age" 
                {...register("age")} 
                />
                {errors.age && <p className="text-red-500">{errors.age.message}</p>}
              </div>

              <div className="flex flex-col gap-8 lg:col-span-2">
                <p className="font-medium text-center lg:text-left">
                  Don't forget to claim your result at our InfoDay
                </p>

                <div className="flex justify-center lg:justify-end">
                  <button
                    type="submit"
                    className="w-full lg:w-auto bg-transparent border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-100"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
      </div>
  )
}