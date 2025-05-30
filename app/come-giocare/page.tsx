import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Check, HelpCircle, Target, Award, Calendar, DollarSign } from "lucide-react"

export default function ComeGiocarePage() {
  const steps = [
    {
      title: "Scegli 5 numeri",
      description: "Seleziona 5 numeri da 1 a 40 sulla schedina di gioco.",
      icon: <Target className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Paga la giocata",
      description: "Ogni giocata costa solo 2€. Puoi giocare online o presso un punto vendita autorizzato.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Attendi l'estrazione",
      description: "Le estrazioni avvengono ogni giorno alle ore 20:00.",
      icon: <Calendar className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Verifica la vincita",
      description: "Controlla se hai vinto con 2, 3, 4 o 5 numeri indovinati.",
      icon: <Award className="h-8 w-8 text-green-600" />,
    },
  ]

  const prizes = [
    { numbers: 5, prize: "Casa da 500.000€", odds: "1 su 658.008" },
    { numbers: 4, prize: "300€", odds: "1 su 3.760" },
    { numbers: 3, prize: "50€", odds: "1 su 102" },
    { numbers: 2, prize: "10€", odds: "1 su 10" },
  ]

  const faqs = [
    {
      question: "Quanto costa giocare a VinciCasa?",
      answer: "Una giocata singola costa 2€. È possibile effettuare giocate multiple o sistematiche a costi maggiori.",
    },
    {
      question: "Quando avvengono le estrazioni?",
      answer: "Le estrazioni avvengono tutti i giorni dell'anno alle ore 20:00.",
    },
    {
      question: "Come posso riscuotere una vincita?",
      answer:
        "Per vincite fino a 500€ puoi riscuotere presso qualsiasi punto vendita. Per vincite superiori, devi recarti presso un Ufficio Premi Sisal o seguire la procedura online se hai giocato sul sito.",
    },
    {
      question: "Quanto tempo ho per riscuotere una vincita?",
      answer: "Hai 60 giorni di tempo dalla pubblicazione del bollettino ufficiale per riscuotere la vincita.",
    },
    {
      question: "Come funziona il premio casa?",
      answer:
        "Il premio di 500.000€ viene suddiviso in 200.000€ in denaro, che vengono liquidati immediatamente, e 300.000€ che devono essere utilizzati per l'acquisto di uno o più immobili entro 2 anni.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Image src="/sisal-logo.png" alt="VinciCasa Logo" width={150} height={48} className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Come Giocare a <span className="text-green-600">VinciCasa</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri come partecipare al gioco che ti permette di vincere una casa ogni giorno. Bastano pochi semplici
            passi per tentare la fortuna!
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-green-100 rounded-full p-4 mb-4">{step.icon}</div>
                <CardTitle className="text-xl text-green-700">
                  {index + 1}. {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Prizes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Premi VinciCasa</h2>

          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="p-4 text-left font-bold text-green-800">Numeri Indovinati</th>
                      <th className="p-4 text-left font-bold text-green-800">Premio</th>
                      <th className="p-4 text-left font-bold text-green-800">Probabilità</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prizes.map((prize, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-green-50"}>
                        <td className="p-4 font-semibold">{prize.numbers}</td>
                        <td className="p-4">{prize.prize}</td>
                        <td className="p-4">{prize.odds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Win */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Come Vincere una Casa</h2>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image src="/sisal-logo.png" alt="VinciCasa Logo" width={200} height={65} className="mx-auto" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Premio da 500.000€</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>200.000€ in denaro</strong> liquidati immediatamente
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>300.000€ per l'acquisto</strong> di uno o più immobili
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>2 anni di tempo</strong> per scegliere la casa dei tuoi sogni
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Libertà di scelta</strong> su località, dimensioni e caratteristiche
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Assistenza dedicata</strong> per tutte le pratiche burocratiche
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Domande Frequenti</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-green-700">
                    <HelpCircle className="h-5 w-5" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Pronto a Vincere una Casa?</h3>
              <p className="text-lg mb-6">
                Inizia subito a giocare e scopri se la fortuna è dalla tua parte. Ogni giorno una nuova opportunità!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Registrati e Gioca
                </Link>
                <Link
                  href="/reviews"
                  className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Leggi le Storie dei Vincitori
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
