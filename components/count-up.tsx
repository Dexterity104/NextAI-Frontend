"use client"

import { useState, useEffect, useRef } from "react"

export default function CountUp({ value }) {
  const [displayValue, setDisplayValue] = useState("0")
  const counterRef = useRef(null)
  const valueRef = useRef(value)

  useEffect(() => {
    valueRef.current = value

    const isNumeric = /^\d+$/.test(value.replace(/[^0-9]/g, ""))

    if (!isNumeric) {
      setDisplayValue(value)
      return
    }

    const numericValue = Number.parseInt(value.replace(/[^0-9]/g, ""), 10)
    const suffix = value.replace(/[0-9]/g, "")

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = 0
          const end = numericValue
          const duration = 2000
          const startTime = performance.now()

          const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)
            const easeOutQuad = 1 - (1 - progress) * (1 - progress)

            const currentValue = Math.floor(easeOutQuad * end)
            setDisplayValue(`${currentValue}${suffix}`)

            if (progress < 1) {
              requestAnimationFrame(updateCounter)
            }
          }

          requestAnimationFrame(updateCounter)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [value])

  return <span ref={counterRef}>{displayValue}</span>
}
