"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DrawTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(20, 0, 0, 0) // Estrazione alle 20:00

      const difference = tomorrow.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-2 border-green-200 shadow-lg">
          <CardHeader className="text-center bg-green-50">
            <CardTitle className="text-3xl font-bold text-green-800">🕐 Prossima Estrazione VinciCasa</CardTitle>
            <p className="text-lg text-green-600">Ogni giorno alle ore 20:00</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-100 rounded-lg p-6">
                <div className="text-4xl font-bold text-green-800">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-green-600 font-semibold">Ore</div>
              </div>
              <div className="bg-green-100 rounded-lg p-6">
                <div className="text-4xl font-bold text-green-800">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-green-600 font-semibold">Minuti</div>
              </div>
              <div className="bg-green-100 rounded-lg p-6">
                <div className="text-4xl font-bold text-green-800">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-green-600 font-semibold">Secondi</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-xl font-semibold text-gray-700">
                Premio in palio: <span className="text-green-600">500.000€</span> per una casa!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
