import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/sisal-logo.svg"
              alt="Sisal Logo"
              width={120}
              height={38}
              className="mb-4 brightness-0 invert"
            />
            <h3 className="text-xl font-bold text-green-400 mb-2">VinciCasa</h3>
            <p className="text-gray-300 text-sm">Il gioco del Lotto che ti permette di vincere una casa ogni giorno.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-green-400">Gioco Responsabile</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Gioca responsabilmente</p>
              <p className="text-gray-300">Se hai bisogno di aiuto:</p>

              <div className="grid grid-cols-4 gap-2 mt-4">
                <Link href="https://www.adm.gov.it/portale/" className="block">
                  <Image
                    src="/adm.svg"
                    alt="ADM"
                    width={60}
                    height={30}
                    className="brightness-0 invert hover:brightness-75"
                  />
                </Link>
                <Link href="https://www.adm.gov.it/portale/" className="block">
                  <Image
                    src="/adm-2.svg"
                    alt="ADM"
                    width={60}
                    height={30}
                    className="brightness-0 invert hover:brightness-75"
                  />
                </Link>
                <Link href="https://www.giochinumerici.info/gioca-il-giusto" className="block">
                  <Image
                    src="/responsabili.svg"
                    alt="Gioca il Giusto"
                    width={60}
                    height={30}
                    className="brightness-0 invert hover:brightness-75"
                  />
                </Link>
                <Image
                  src="/plus18.svg"
                  alt="18+"
                  width={60}
                  height={30}
                  className="brightness-0 invert hover:brightness-75"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-green-400">Informazioni Legali</h4>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white block">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white block">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-red-500">18+</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs text-gray-400 mb-2">
                Il sito pubblicizza VinciCasa sulla base della collaborazione con l'operatore licenziato Sisal Italia
                S.p.A. e opera secondo le regole dell'Agenzia delle Dogane e dei Monopoli (ADM).
              </p>
              <p className="text-xs text-gray-500">© 2025 itgrandevittoria.com - Tutti i diritti riservati</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
