"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    title: "",
    firstName: "",
    lastName: "",
    birthName: "",
    zipCode: "",
    location: "",
    street: "",
    houseNumber: "",
    dateOfBirth: "",
    placeOfBirth: "",
    phone: "",
    iban: "",
    agreePrivacy: false,
    agreeCookies: false,
    agreeResponsibleGaming: false,
    confirm18Plus: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = "L'email è obbligatoria"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato email non valido"
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "La password è obbligatoria"
    } else if (formData.password.length < 8) {
      newErrors.password = "La password deve essere di almeno 8 caratteri"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Le password non coincidono"
    }

    // Required fields
    const requiredFields = ["title", "firstName", "lastName", "zipCode", "location", "street", "dateOfBirth", "phone"]
    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = "Questo campo è obbligatorio"
      }
    })

    // IBAN validation
    if (!formData.iban) {
      newErrors.iban = "L'IBAN è obbligatorio"
    } else if (!/^IT\d{2}[A-Z]\d{22}$/.test(formData.iban.replace(/\s/g, ""))) {
      newErrors.iban = "Formato IBAN non valido"
    }

    // Checkboxes validation
    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = "Devi accettare la Privacy Policy"
    }
    if (!formData.agreeCookies) {
      newErrors.agreeCookies = "Devi accettare la Cookie Policy"
    }
    if (!formData.agreeResponsibleGaming) {
      newErrors.agreeResponsibleGaming = "Devi accettare le regole del gioco responsabile"
    }
    if (!formData.confirm18Plus) {
      newErrors.confirm18Plus = "Devi confermare di avere almeno 18 anni"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Registration attempt:", formData)
      // Handle registration logic here
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <Image src="/sisal-logo.svg" alt="Sisal Logo" width={120} height={38} className="mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-green-700">Registrazione</CardTitle>
            <p className="text-gray-600">
              Unisciti a migliaia di vincitori e inizia il tuo viaggio nella lotteria oggi
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email e Password */}
              <div className="space-y-4">
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Crea una password sicura"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className={errors.password ? "border-red-500" : ""}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Conferma Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Conferma la password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className={errors.confirmPassword ? "border-red-500" : ""}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>

              {/* Dati Account */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                    👤
                  </span>
                  ACCOUNT
                </h3>

                <div>
                  <Label htmlFor="title">Titolo *</Label>
                  <Select value={formData.title} onValueChange={(value) => setFormData({ ...formData, title: value })}>
                    <SelectTrigger className={errors.title ? "border-red-500" : ""}>
                      <SelectValue placeholder="Seleziona titolo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sig">Sig.</SelectItem>
                      <SelectItem value="sig.ra">Sig.ra</SelectItem>
                      <SelectItem value="dott">Dott.</SelectItem>
                      <SelectItem value="dott.ssa">Dott.ssa</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nome *</Label>
                    <Input
                      id="firstName"
                      placeholder="Il tuo nome"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Cognome *</Label>
                    <Input
                      id="lastName"
                      placeholder="Il tuo cognome"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="birthName">Nome di nascita</Label>
                  <Input
                    id="birthName"
                    placeholder="Nome di nascita (se diverso)"
                    value={formData.birthName}
                    onChange={(e) => setFormData({ ...formData, birthName: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zipCode">CAP *</Label>
                    <Input
                      id="zipCode"
                      placeholder="Codice postale"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className={errors.zipCode ? "border-red-500" : ""}
                    />
                    {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                  </div>
                  <div>
                    <Label htmlFor="location">Località *</Label>
                    <Input
                      id="location"
                      placeholder="Città/Località"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={errors.location ? "border-red-500" : ""}
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="street">Via *</Label>
                    <Input
                      id="street"
                      placeholder="Indirizzo"
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      className={errors.street ? "border-red-500" : ""}
                    />
                    {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                  </div>
                  <div>
                    <Label htmlFor="houseNumber">Numero civico</Label>
                    <Input
                      id="houseNumber"
                      placeholder="Numero civico"
                      value={formData.houseNumber}
                      onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">Data di nascita *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className={errors.dateOfBirth ? "border-red-500" : ""}
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                  </div>
                  <div>
                    <Label htmlFor="placeOfBirth">Luogo di nascita</Label>
                    <Input
                      id="placeOfBirth"
                      placeholder="Luogo di nascita"
                      value={formData.placeOfBirth}
                      onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Telefono *</Label>
                  <Input
                    id="phone"
                    placeholder="+39 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Dati Bancari */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-700 flex items-center gap-2">
                  <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">
                    🏦
                  </span>
                  BANCA
                </h3>

                <div>
                  <Label htmlFor="iban">IBAN *</Label>
                  <Input
                    id="iban"
                    placeholder="Inserisci il tuo IBAN"
                    value={formData.iban}
                    onChange={(e) => setFormData({ ...formData, iban: e.target.value })}
                    className={errors.iban ? "border-red-500" : ""}
                  />
                  {errors.iban && <p className="text-red-500 text-sm mt-1">{errors.iban}</p>}
                </div>
              </div>

              {/* Checkbox di consenso */}
              <div className="space-y-4 border-t pt-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreePrivacy"
                      checked={formData.agreePrivacy}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                      className={errors.agreePrivacy ? "border-red-500" : ""}
                    />
                    <Label htmlFor="agreePrivacy" className="text-sm leading-relaxed">
                      Accetto la{" "}
                      <Link href="/privacy" className="text-green-600 hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      e il trattamento dei miei dati personali *
                    </Label>
                  </div>
                  {errors.agreePrivacy && <p className="text-red-500 text-sm">{errors.agreePrivacy}</p>}

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeCookies"
                      checked={formData.agreeCookies}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeCookies: checked as boolean })}
                      className={errors.agreeCookies ? "border-red-500" : ""}
                    />
                    <Label htmlFor="agreeCookies" className="text-sm leading-relaxed">
                      Accetto la{" "}
                      <Link href="/cookies" className="text-green-600 hover:underline">
                        Cookie Policy
                      </Link>{" "}
                      e l'utilizzo dei cookie *
                    </Label>
                  </div>
                  {errors.agreeCookies && <p className="text-red-500 text-sm">{errors.agreeCookies}</p>}

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeResponsibleGaming"
                      checked={formData.agreeResponsibleGaming}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, agreeResponsibleGaming: checked as boolean })
                      }
                      className={errors.agreeResponsibleGaming ? "border-red-500" : ""}
                    />
                    <Label htmlFor="agreeResponsibleGaming" className="text-sm leading-relaxed">
                      Accetto le regole del{" "}
                      <Link
                        href="https://www.giochinumerici.info/gioca-il-giusto"
                        className="text-green-600 hover:underline"
                      >
                        gioco responsabile
                      </Link>{" "}
                      e mi impegno a giocare in modo consapevole *
                    </Label>
                  </div>
                  {errors.agreeResponsibleGaming && (
                    <p className="text-red-500 text-sm">{errors.agreeResponsibleGaming}</p>
                  )}

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="confirm18Plus"
                      checked={formData.confirm18Plus}
                      onCheckedChange={(checked) => setFormData({ ...formData, confirm18Plus: checked as boolean })}
                      className={errors.confirm18Plus ? "border-red-500" : ""}
                    />
                    <Label htmlFor="confirm18Plus" className="text-sm leading-relaxed font-semibold">
                      <span className="text-red-600">18+</span> Confermo di avere almeno 18 anni e di essere maggiorenne
                      *
                    </Label>
                  </div>
                  {errors.confirm18Plus && <p className="text-red-500 text-sm">{errors.confirm18Plus}</p>}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3"
              >
                Registrati
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Hai già un account?{" "}
                  <Link href="/login" className="text-green-600 hover:underline font-semibold">
                    Accedi qui
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
