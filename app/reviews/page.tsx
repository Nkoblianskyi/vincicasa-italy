import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Calendar, Home } from "lucide-react"
import Image from "next/image"

export default function ReviewsPage() {
  const winners = [
    {
      name: "Marco Rossi",
      location: "Milano, Lombardia",
      date: "15 Novembre 2024",
      prize: "Casa del valore di 500.000€",
      numbers: [7, 15, 23, 31, 38],
      testimonial:
        "Non riesco ancora a crederci! Dopo anni di gioco, finalmente la fortuna ha bussato alla mia porta. VinciCasa ha cambiato la mia vita e quella della mia famiglia. Ora abbiamo la casa dei nostri sogni!",
      rating: 5,
    },
    {
      name: "Giulia Bianchi",
      location: "Roma, Lazio",
      date: "8 Novembre 2024",
      prize: "Casa del valore di 500.000€",
      numbers: [3, 12, 19, 27, 35],
      testimonial:
        "Incredibile! Ho sempre sognato di avere una casa tutta mia e VinciCasa ha reso possibile questo sogno. Il processo è stato trasparente e veloce. Consiglio a tutti di provare!",
      rating: 5,
    },
    {
      name: "Antonio Verdi",
      location: "Napoli, Campania",
      date: "2 Novembre 2024",
      prize: "Casa del valore di 500.000€",
      numbers: [9, 16, 22, 29, 40],
      testimonial:
        "Fantastico! Giocavo da poco tempo e non mi aspettavo di vincere così presto. VinciCasa è davvero il gioco che può cambiare la vita. Grazie Sisal per questa opportunità!",
      rating: 5,
    },
    {
      name: "Elena Ferrari",
      location: "Torino, Piemonte",
      date: "25 Ottobre 2024",
      prize: "Casa del valore di 500.000€",
      numbers: [5, 14, 21, 33, 37],
      testimonial:
        "Un sogno che diventa realtà! Dopo tanti anni di affitto, finalmente posso dire di avere una casa di proprietà. VinciCasa è stata la svolta della mia vita. Lo consiglio vivamente!",
      rating: 5,
    },
    {
      name: "Francesco Conti",
      location: "Firenze, Toscana",
      date: "18 Ottobre 2024",
      prize: "Casa del valore di 500.000€",
      numbers: [11, 18, 26, 32, 39],
      testimonial:
        "Straordinario! Non avrei mai pensato che giocare a VinciCasa mi avrebbe portato a vincere una casa. È un'emozione indescrivibile. Grazie per aver reso possibile il mio sogno!",
      rating: 5,
    },
    {
      name: "Chiara Lombardi",
      location: "Bologna, Emilia-Romagna",
      date: "12 Ottobre 2024",
      prize: "Casa del valore di 500.000€",
      numbers: [2, 13, 24, 30, 36],
      testimonial:
        "Incredibile esperienza! VinciCasa ha superato tutte le mie aspettative. Vincere una casa è stato il regalo più bello che potessi ricevere. Ora posso finalmente realizzare tutti i miei progetti!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Image src="/sisal-logo.svg" alt="VinciCasa Logo" width={150} height={48} className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Recensioni dei <span className="text-green-600">Vincitori VinciCasa</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri le storie di chi ha già vinto una casa con VinciCasa. Ogni giorno, nuovi vincitori realizzano il
            sogno di una casa propria.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-green-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">365</div>
              <p className="text-gray-600">Case vinte all'anno</p>
            </CardContent>
          </Card>
          <Card className="text-center border-green-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">500.000€</div>
              <p className="text-gray-600">Valore di ogni casa</p>
            </CardContent>
          </Card>
          <Card className="text-center border-green-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-600">Vincitori soddisfatti</p>
            </CardContent>
          </Card>
        </div>

        {/* Winners Reviews */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Storie di Successo Reali</h2>

          {winners.map((winner, index) => (
            <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-green-700 mb-2">{winner.name}</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {winner.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {winner.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Home className="h-4 w-4" />
                        {winner.prize}
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(winner.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                  "{winner.testimonial}"
                </blockquote>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Numeri Vincenti:</h4>
                  <div className="flex gap-2">
                    {winner.numbers.map((number, numIndex) => (
                      <div
                        key={numIndex}
                        className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold"
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Vuoi essere il prossimo vincitore?</h3>
              <p className="text-lg mb-6">
                Unisciti a migliaia di giocatori che ogni giorno tentano la fortuna con VinciCasa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/register"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Inizia a Giocare Ora
                </a>
                <a
                  href="/come-giocare"
                  className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Scopri Come Giocare
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            * Le testimonianze sono rappresentative di esperienze reali di vincitori VinciCasa. Il gioco può causare
            dipendenza patologica. Gioca responsabilmente. 18+
          </p>
        </div>
      </div>
    </div>
  )
}
