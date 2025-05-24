import { useLanguage } from "./language-context"
import Image from "next/image"

export default function LanguageToggle() {
  const context = useLanguage()
  if (!context) {
    throw new Error("LanguageToggle must be used within a LanguageProvider")
  }

  const { language, switchLanguage } = context

  return (
    <button
      onClick={() => switchLanguage(language === "en" ? "es" : "en")}
      className="flex items-center gap-2 text-sm font-semibold border px-3 py-1 rounded hover:bg-violet-100 transition"
    >
      <Image
        src={language === "en" ? "https://flagcdn.com/es.svg" : "https://flagcdn.com/us.svg"}
        alt="Flag"
        width={20}
        height={14}
      />
      {language === "en" ? "ES" : "EN"}
    </button>
  )
}
