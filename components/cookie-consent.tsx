"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation("common")

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-40">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          {t("cookiesText")}
          <a href="#" className="text-violet-600 hover:underline ml-1">
            {t("cookiesLearnMore")}
          </a>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
            {t("cookiesDecline")}
          </Button>
          <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white" onClick={handleAccept}>
            {t("cookiesAccept")}
          </Button>
        </div>
      </div>
    </div>
  )
}