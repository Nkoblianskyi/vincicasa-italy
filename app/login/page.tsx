"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = "L'email è obbligatoria"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato email non valido"
    }

    if (!formData.password) {
      newErrors.password = "La password è obbligatoria"
    } else if (formData.password.length < 6) {
      newErrors.password = "La password deve essere di almeno 6 caratteri"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Login attempt:", formData)
      setShowSuccess(true)
      setTimeout(() => {
        window.location.href = "/"
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Image src="/sisal-logo.svg" alt="Sisal Logo" width={120} height={38} className="mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-green-700">Accedi al tuo Account</CardTitle>
          <p className="text-gray-600">Accedi per giocare a VinciCasa</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Inserisci la tua email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Inserisci la tua password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
              />
              <Label htmlFor="remember" className="text-sm">
                Ricordami
              </Label>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Accedi
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Non hai un account?{" "}
                <Link href="/register" className="text-green-600 hover:underline font-semibold">
                  Registrati qui
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Accesso Riuscito!</h3>
            <p className="text-gray-600 mb-4">Benvenuto in VinciCasa. Verrai reindirizzato alla homepage...</p>
          </div>
        </div>
      )}
    </div>
  )
}
