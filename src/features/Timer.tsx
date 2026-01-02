import { useEffect } from "react"
import { useSessionStore } from "../store/SessionStore"

export const Timer = () => {
  const duration = useSessionStore((state) => state.duration)
  const setDuration = useSessionStore((state) => state.setDuration)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const currentDuration = useSessionStore.getState().duration
      setDuration(currentDuration + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    }
  }

  const { minutes, seconds } = formatTime(duration)

  return (
    <div className="mt-8 flex flex-col items-center gap-2 mb-12">
      <p className="text-base">
        Date: {new Date().toLocaleDateString('id-ID', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })}
      </p>
      <p className="text-base text-gray-500 font-medium">
         {minutes}:{seconds}
      </p>
    </div>
  )
}