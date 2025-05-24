"use client"

import Image from "next/image"

type StatCardProps = {
  number: string
  text: string
  imageSrc?: string
}

export default function StatCard({ number, text, imageSrc }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-5">
      {imageSrc && (
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-gray-200">
          <Image
            src={imageSrc}
            alt={text}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="text-4xl font-extrabold text-violet-600">{number}</div>
      <p className="text-gray-700 text-base">{text}</p>
    </div>
  )
}
