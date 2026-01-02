import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Stepper } from "../components/Stepper"
import { OpenSuccessModal } from "../features/question/OpenSuccessModal"
import { Timer } from "../features/Timer"
import { Header } from "./Header"

export const Index = () => {
  const [openSuccess, setOpenSuccess] = useState(false)

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-64 py-12">
        <Timer/>
        <Stepper/>
        <Outlet context={{ setOpenSuccess }} />
        <OpenSuccessModal open={openSuccess} onOpenChange={setOpenSuccess} />
      </main>
    </>
  )
}
