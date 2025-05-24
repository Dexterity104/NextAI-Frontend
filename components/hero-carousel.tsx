"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  "/images/hero1.jpeg",
  "/images/hero2.jpeg",
  "/images/hero3.jpeg",
  "/images/hero4.jpeg",
  "/images/hero5.jpeg",
  "/images/hero6.jpeg",
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const nextImage = () => setCurrent((prev) => (prev + 1) % heroImages.length)
  const prevImage = () => setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-2xl aspect-[3/2] min-h-[300px] overflow-hidden rounded-xl group bg-white mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${current * (100 / heroImages.length)}%)`,
          width: `${heroImages.length * 100}%`,
        }}
      >
        {heroImages.map((src, index) => (
          <div
            key={index}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / heroImages.length}%` }}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100 z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  )
}
