'use client'

import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null)

  const switchTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    const getInitialTheme = () => {
      if (typeof window !== 'undefined') {
        const localTheme = window.localStorage.getItem('theme')
        if (localTheme) {
          return localTheme === 'dark'
        } else if (
          window.matchMedia?.('(prefers-color-scheme: dark)').matches
        ) {
          return true
        }
      }
      return false
    }

    setIsDarkTheme(getInitialTheme)
  }, [])

  useEffect(() => {
    if (isDarkTheme === null) return
    if (isDarkTheme) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', 'dark')
      }
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme', 'light')
      }
    }
  }, [isDarkTheme])

  return (
    <header className="flex flex-row items-center pt-4 xs:pt-7 sm:pt-10">
      <Link
        href={'/'}
        className="font-bold md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Juul Van de Velde
      </Link>
      <nav className="ml-auto flex flex-row justify-end sm:w-1/2 sm:justify-between">
        <ul className="md:text-md hidden flex-row font-medium sm:flex sm:gap-5 md:gap-8 lg:text-lg xl:text-xl">
          <li className="hover:underline">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:underline">
            <a href="#works">Works</a>
          </li>
          <li className="hover:underline">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          type="button"
          onClick={switchTheme}
          aria-label="Toggle Dark/Light Mode"
        >
          {isDarkTheme ? (
            <>
              <MoonIcon
                size={24}
                weight="fill"
                className="inline-block lg:hidden"
              />
              <MoonIcon
                size={32}
                weight="fill"
                className="hidden lg:inline-block"
              />
            </>
          ) : (
            <>
              <SunIcon
                size={24}
                weight="fill"
                className="inline-block lg:hidden"
              />
              <SunIcon
                size={32}
                weight="fill"
                className="hidden lg:inline-block"
              />
            </>
          )}
        </button>
      </nav>
    </header>
  )
}

export default Header
