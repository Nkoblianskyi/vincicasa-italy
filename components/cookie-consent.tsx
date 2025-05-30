"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto border-2 border-green-200 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Utilizzo dei Cookie</h3>
              <p className="text-sm text-gray-600 mb-4">
                Questo sito utilizza cookie tecnici e di profilazione per migliorare la tua esperienza di navigazione e
                per mostrarti contenuti personalizzati. Continuando la navigazione acconsenti all'uso dei cookie.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button onClick={acceptCookies} className="bg-green-600 hover:bg-green-700">
                  Accetta Tutti
                </Button>
                <Button onClick={rejectCookies} variant="outline">
                  Rifiuta
                </Button>
                <Button variant="ghost" className="text-sm">
                  Personalizza
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={rejectCookies} className="shrink-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
