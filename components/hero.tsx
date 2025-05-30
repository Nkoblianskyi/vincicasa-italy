"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Ticket } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
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
    <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/sisal-logo.png"
            alt="Sisal Logo"
            width={200}
            height={65}
            className="mx-auto mb-4"
          />
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            <span className="text-yellow-400">VinciCasa</span> - La Tua Casa Ti Aspetta!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Ogni giorno una nuova opportunità di vincere una casa del valore di 500.000€! VinciCasa è il gioco che può
            cambiare la tua vita con sorteggi quotidiani.
          </motion.p>
        </motion.div>

        {/* Timer con design speciale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 max-w-4xl mx-auto mb-8 shadow-2xl border-4 border-yellow-400"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Clock className="h-8 w-8 text-yellow-400" />
            </motion.div>
            <h2 className="text-3xl font-bold text-yellow-400">PROSSIMA ESTRAZIONE</h2>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Clock className="h-8 w-8 text-yellow-400" />
            </motion.div>
          </div>

          <div className="text-xl font-semibold text-white mb-6">Oggi alle ore 20:00</div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
              <motion.div
                key={timeLeft.hours}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-5xl font-bold text-red-600 mb-2"
              >
                {timeLeft.hours.toString().padStart(2, "0")}
              </motion.div>
              <div className="text-red-500 font-bold text-lg">ORE</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
              <motion.div
                key={timeLeft.minutes}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-5xl font-bold text-red-600 mb-2"
              >
                {timeLeft.minutes.toString().padStart(2, "0")}
              </motion.div>
              <div className="text-red-500 font-bold text-lg">MINUTI</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
              <motion.div
                key={timeLeft.seconds}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-5xl font-bold text-red-600 mb-2"
              >
                {timeLeft.seconds.toString().padStart(2, "0")}
              </motion.div>
              <div className="text-red-500 font-bold text-lg">SECONDI</div>
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-yellow-400 text-black rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image src="/sisal-logo.png" alt="VinciCasa" width={80} height={26} />
            </div>
            <p className="text-2xl font-bold">
              Premio in palio: <span className="text-red-600">500.000€</span>
            </p>
            <p className="text-lg font-semibold">per una casa!</p>
          </motion.div>

          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-6 text-xl rounded-xl shadow-lg border-2 border-yellow-300 flex items-center justify-center mx-auto"
            >
              <Ticket className="mr-3 h-6 w-6" />
              COMPRA BIGLIETTO ORA!
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">🏠 Vinci Una Casa Ogni Giorno!</h2>
          <p className="text-lg mb-6">
            Con VinciCasa puoi vincere una casa del valore di 500.000€ ogni singolo giorno dell'anno. Scegli 5 numeri da
            1 a 40 e scopri se la fortuna è dalla tua parte!
          </p>
          <Link href="/login">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                Scopri Come Giocare
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
