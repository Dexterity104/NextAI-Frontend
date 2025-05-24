"use client"

import { useEffect, useState } from "react"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const theme = localStorage.getItem("theme") || "light"
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
  }, [])

  if (!isMounted) {
    return null // Or a fallback skeleton
  }

  return <>{children}</>
}
