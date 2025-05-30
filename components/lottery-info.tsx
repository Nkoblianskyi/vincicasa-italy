"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export function LotteryInfo() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tutto su <span className="text-green-600">VinciCasa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VinciCasa è il gioco del Lotto che ti permette di vincere una casa ogni giorno. Scopri come funziona e
            inizia a giocare responsabilmente.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <motion.div variants={item}>
            <Card className="border-green-200 hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">🎯 Come Si Gioca</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scegli 5 numeri da 1 a 40</li>
                  <li>• Costo della giocata: 2€</li>
                  <li>• Estrazione ogni giorno alle 20:00</li>
                  <li>• Vinci con 2, 3, 4 o 5 numeri</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="border-green-200 hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">🏆 Premi VinciCasa</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • <strong>5 numeri:</strong> Casa da 500.000€
                  </li>
                  <li>
                    • <strong>4 numeri:</strong> 300€
                  </li>
                  <li>
                    • <strong>3 numeri:</strong> 50€
                  </li>
                  <li>
                    • <strong>2 numeri:</strong> 10€
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="border-green-200 hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">📅 Quando Si Gioca</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tutti i giorni dell'anno</li>
                  <li>• Estrazione alle ore 20:00</li>
                  <li>• Risultati disponibili subito</li>
                  <li>• 365 opportunità all'anno</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Sezione Perché Scegliere VinciCasa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg p-8 mb-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="md:w-1/3"
            >
              <Image src="/sisal-logo.png" alt="Sisal Logo" width={200} height={65} className="mx-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="md:w-2/3"
            >
              <h3 className="text-3xl font-bold text-green-700 mb-4">Perché Scegliere VinciCasa?</h3>
              <div className="space-y-3 text-gray-600">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-600">✓</span>
                  <strong>365 opportunità all'anno</strong> - Un sorteggio ogni giorno
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-600">✓</span>
                  <strong>Premio garantito</strong> - Sempre una casa in palio da 500.000€
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-600">✓</span>
                  <strong>Probabilità migliori</strong> - Solo 40 numeri tra cui scegliere
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-600">✓</span>
                  <strong>Operatore affidabile</strong> - Gestito da Sisal Italia S.p.A.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sezione Come Funziona */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="md:w-1/3"
            >
              <Image src="/sisal-logo.png" alt="Sisal Logo" width={180} height={60} className="mx-auto" />
            </motion.div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-green-700 mb-4">Come Funziona VinciCasa</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <h4 className="font-bold text-green-600 mb-2">1. Scegli i Numeri</h4>
                  <p className="text-sm text-gray-600">Seleziona 5 numeri da 1 a 40 sulla schedina</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <h4 className="font-bold text-green-600 mb-2">2. Paga la Giocata</h4>
                  <p className="text-sm text-gray-600">Ogni giocata costa solo 2€</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <h4 className="font-bold text-green-600 mb-2">3. Attendi l'Estrazione</h4>
                  <p className="text-sm text-gray-600">Ogni giorno alle ore 20:00</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <h4 className="font-bold text-green-600 mb-2">4. Controlla i Risultati</h4>
                  <p className="text-sm text-gray-600">Vinci con 2, 3, 4 o 5 numeri indovinati</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <Image src="/sisal-logo.png" alt="VinciCasa by Sisal" width={150} height={48} className="mx-auto mb-4" />
          <p className="text-lg text-gray-600">
            <strong>VinciCasa</strong> - Il gioco che può cambiare la tua vita ogni giorno
          </p>
        </motion.div>
      </div>
    </section>
  )
}
