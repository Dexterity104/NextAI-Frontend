"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function CTAPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { t } = useTranslation("common")

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) {
        setIsVisible(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [dismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setDismissed(true)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative animate-fadeIn">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{t("readyToTransform")}</h3>
          <p className="text-gray-700">{t("ctaPopupText")}</p>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-violet-600 to-sky-500 hover:from-violet-700 hover:to-sky-600 text-white py-6 rounded-lg text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
          onClick={() => {
            window.location.href = "#contact"
            handleDismiss()
          }}
          data-goal="popup-cta"
        >
          {t("getConsultation")}
        </Button>
      </div>
    </div>
  )
}
