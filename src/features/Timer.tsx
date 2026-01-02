import { useEffect, useState } from "react"

export const Timer = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1)
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

  const { hours, minutes, seconds } = formatTime(time)

  return (
    <div className="mt-8 flex flex-col items-center gap-2 mb-12">
      <p className="text-base">
        Date: {new Date().toLocaleDateString('id-ID', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })}
      </p>
      {/* <p className="text-base">
        Time: {hours}:{minutes}:{seconds}
      </p> */}
    </div>
  )
}