'use client'
import { gsap } from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

function Contact() {
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsCopied(false)
  }

  const handleClick = () => {
    navigator.clipboard.writeText('vandeveldejuul@protonmail.com')
    setIsCopied(true)
  }

  const firstText = useRef<HTMLSpanElement>(null)
  const secondText = useRef<HTMLSpanElement>(null)
  const thirdText = useRef<HTMLSpanElement>(null)
  const fourthText = useRef<HTMLSpanElement>(null)
  const slider = useRef(null)
  const xPercentRef = useRef(0)
  const animationRef = useRef<number | null>(null)

  const animate = useCallback(() => {
    if (xPercentRef.current < -100) {
      xPercentRef.current = 0
    }
    if (firstText.current)
      gsap.set(firstText.current, { xPercent: xPercentRef.current })
    if (secondText.current)
      gsap.set(secondText.current, { xPercent: xPercentRef.current })
    if (thirdText.current)
      gsap.set(thirdText.current, { xPercent: xPercentRef.current })
    if (fourthText.current)
      gsap.set(fourthText.current, { xPercent: xPercentRef.current })
    xPercentRef.current -= 0.05
    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (isHovered) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      return
    }

    // Small delay to ensure refs are attached after render
    const timeoutId = setTimeout(() => {
      const textWidth = firstText.current?.getBoundingClientRect().width || 0

      if (secondText.current) {
        gsap.set(secondText.current, { left: textWidth })
      }
      if (thirdText.current) {
        gsap.set(thirdText.current, { left: textWidth * 2 })
      }
      if (fourthText.current) {
        gsap.set(fourthText.current, { left: textWidth * 3 })
      }

      xPercentRef.current = 0
      animationRef.current = requestAnimationFrame(animate)
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, isHovered])

  return (
    <>
      <button
        type="button"
        id="contact"
        ref={slider}
        className="relative flex w-full justify-center overflow-hidden whitespace-nowrap text-4xl font-bold italic sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        onMouseEnter={() => {
          handleMouseEnter()
        }}
        onMouseLeave={() => {
          handleMouseLeave()
        }}
        onClick={handleClick}
      >
        {!isHovered ? (
          <div className="relative flex w-full">
            <span ref={firstText} className="m-0 inline-block pr-8 uppercase">
              reach out -
            </span>
            <span
              ref={secondText}
              className="absolute left-full m-0 inline-block pr-8 uppercase"
            >
              reach out -
            </span>
            <span
              ref={thirdText}
              className="absolute left-full m-0 inline-block pr-8 uppercase"
            >
              reach out -
            </span>
            <span
              ref={fourthText}
              className="absolute left-full m-0 inline-block pr-8 uppercase"
            >
              reach out -
            </span>
          </div>
        ) : (
          <span className="text-xl uppercase italic xxs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {isCopied ? 'email copied :)' : 'click to copy email'}
          </span>
        )}
      </button>
      <div className="mb-14 hidden pt-2 text-sm xxs:text-base sm:mb-24 sm:block md:mb-28 lg:mb-32 xl:mb-40">
        PS: HOVER OVER THE MOVING TEXT
      </div>
      <div className="mb-14 pt-2 text-sm xxs:text-base sm:mb-24 sm:hidden md:mb-28 lg:mb-32 xl:mb-40">
        PS: CLICK ON THE MOVING TEXT
      </div>
    </>
  )
}

export default Contact
