"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Calendar, Home, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function LatestWinner() {
  const latestWinner = {
    name: "Marco Rossi",
    location: "Milano, Lombardia",
    date: "15 Novembre 2024",
    prize: "Casa del valore di 500.000€",
    numbers: [7, 15, 23, 31, 38],
    testimonial:
      "Non riesco ancora a crederci! Dopo anni di gioco, finalmente la fortuna ha bussato alla mia porta. VinciCasa ha cambiato la mia vita e quella della mia famiglia. Ora abbiamo la casa dei nostri sogni!",
    rating: 5,
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Image src="/sisal-logo.png" alt="VinciCasa Logo" width={150} height={48} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🎉 Ultimo <span className="text-green-600">Vincitore VinciCasa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri la storia del nostro ultimo vincitore che ha realizzato il sogno di una casa propria
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="max-w-4xl mx-auto border-2 border-green-200 shadow-xl bg-gradient-to-r from-green-50 to-white">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Logo Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="lg:w-1/3 text-center"
                >
                  <Image src="/sisal-logo.png" alt="VinciCasa by Sisal" width={180} height={58} className="mx-auto" />
                </motion.div>

                {/* Winner Info */}
                <div className="lg:w-2/3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-6"
                  >
                    <h3 className="text-2xl font-bold text-green-700 mb-2">{latestWinner.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {latestWinner.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {latestWinner.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Home className="h-4 w-4" />
                        {latestWinner.prize}
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(latestWinner.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative mb-6"
                  >
                    <Quote className="h-8 w-8 text-green-600 absolute -top-2 -left-2" />
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed pl-6">
                      "{latestWinner.testimonial}"
                    </blockquote>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="bg-white rounded-lg p-4 border border-green-200 mb-6"
                  >
                    <h4 className="font-semibold text-green-700 mb-2">Numeri Vincenti:</h4>
                    <div className="flex gap-2">
                      {latestWinner.numbers.map((number, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
                        >
                          {number}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-center lg:text-left"
                  >
                    <Link href="/login">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        Compra Biglietto Ora
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-2">Vuoi essere il prossimo vincitore?</h3>
            <p className="text-black mb-4">Ogni giorno una nuova opportunità di vincere 500.000€!</p>
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Inizia a Giocare Ora
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
