"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import i18n from "@/lib/i18n-client"

interface LanguageContextType {
  language: string
  switchLanguage: (lang: string) => void
}

interface LanguageProviderProps {
  children: ReactNode
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en"
    setLanguage(savedLang)
  }, [])

  const switchLanguage = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem("lang", lang)
    i18n.changeLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
