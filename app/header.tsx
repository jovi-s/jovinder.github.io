'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <Image
            src="/jovi.png"
            alt="Jovinder Singh"
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Jovinder Singh
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          AI Engineer
        </TextEffect>
      </div>
    </header>
  )
}
