import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Index = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-64 py-12">
        <Outlet />
      </main>
    </>
  )
}
