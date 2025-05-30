import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-center">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>1. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento dei dati personali è itgrandevittoria.com, che opera in collaborazione con
              Sisal Italia S.p.A.
            </p>

            <h2>2. Dati Raccolti</h2>
            <p>Raccogliamo i seguenti tipi di dati personali:</p>
            <ul>
              <li>Dati di navigazione (indirizzo IP, browser, sistema operativo)</li>
              <li>Cookie tecnici e di profilazione</li>
              <li>Dati forniti volontariamente dall'utente</li>
            </ul>

            <h2>3. Finalità del Trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul>
              <li>Fornire informazioni sui giochi del Lotto</li>
              <li>Migliorare l'esperienza di navigazione</li>
              <li>Rispettare gli obblighi di legge</li>
              <li>Finalità di marketing (previo consenso)</li>
            </ul>

            <h2>4. Base Giuridica</h2>
            <p>Il trattamento è basato su:</p>
            <ul>
              <li>Consenso dell'interessato</li>
              <li>Legittimo interesse del titolare</li>
              <li>Adempimento di obblighi legali</li>
            </ul>

            <h2>5. Diritti dell'Interessato</h2>
            <p>L'interessato ha diritto a:</p>
            <ul>
              <li>Accedere ai propri dati personali</li>
              <li>Rettificare dati inesatti</li>
              <li>Cancellare i dati (diritto all'oblio)</li>
              <li>Limitare il trattamento</li>
              <li>Portabilità dei dati</li>
              <li>Opporsi al trattamento</li>
            </ul>

            <h2>6. Contatti</h2>
            <p>
              Per esercitare i propri diritti o per informazioni sulla privacy, contattare: privacy@itgrandevittoria.com
            </p>

            <div className="mt-8 text-center">
              <Link href="/" className="text-green-600 hover:underline">
                Torna alla Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
