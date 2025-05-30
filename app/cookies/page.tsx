import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-center">Cookie Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2>Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un
              sito web. Vengono utilizzati per migliorare l'esperienza di navigazione e fornire servizi personalizzati.
            </p>

            <h2>Tipi di Cookie Utilizzati</h2>

            <h3>Cookie Tecnici</h3>
            <p>Necessari per il funzionamento del sito web:</p>
            <ul>
              <li>Cookie di sessione</li>
              <li>Cookie di sicurezza</li>
              <li>Cookie di preferenze</li>
            </ul>

            <h3>Cookie Analitici</h3>
            <p>Utilizzati per analizzare il traffico del sito:</p>
            <ul>
              <li>Google Analytics</li>
              <li>Statistiche di utilizzo</li>
              <li>Monitoraggio delle prestazioni</li>
            </ul>

            <h3>Cookie di Profilazione</h3>
            <p>Utilizzati per mostrare contenuti personalizzati:</p>
            <ul>
              <li>Cookie pubblicitari</li>
              <li>Cookie di marketing</li>
              <li>Cookie di social media</li>
            </ul>

            <h2>Gestione dei Cookie</h2>
            <p>È possibile gestire le preferenze dei cookie attraverso:</p>
            <ul>
              <li>Le impostazioni del browser</li>
              <li>Il banner di consenso del sito</li>
              <li>Strumenti di opt-out specifici</li>
            </ul>

            <h2>Cookie di Terze Parti</h2>
            <p>Il sito può utilizzare cookie di terze parti per:</p>
            <ul>
              <li>Servizi di analisi (Google Analytics)</li>
              <li>Servizi pubblicitari</li>
              <li>Integrazione con social media</li>
            </ul>

            <h2>Durata dei Cookie</h2>
            <p>I cookie possono essere:</p>
            <ul>
              <li>
                <strong>Di sessione:</strong> eliminati alla chiusura del browser
              </li>
              <li>
                <strong>Persistenti:</strong> rimangono per un periodo determinato
              </li>
            </ul>

            <h2>Disabilitazione dei Cookie</h2>
            <p>
              È possibile disabilitare i cookie attraverso le impostazioni del browser, tuttavia questo potrebbe
              limitare alcune funzionalità del sito.
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
