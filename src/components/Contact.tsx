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

  const firstText = useRef(null)
  const secondText = useRef(null)
  const thirdText = useRef(null)
  const fourthText = useRef(null)
  const slider = useRef(null)
  const xPercentRef = useRef(0)

  const animate = useCallback(() => {
    if (xPercentRef.current > 0) {
      xPercentRef.current = -100
    }
    if (firstText.current)
      gsap.set(firstText.current, { xPercent: xPercentRef.current })
    if (secondText.current)
      gsap.set(secondText.current, { xPercent: xPercentRef.current })
    if (thirdText.current)
      gsap.set(thirdText.current, { xPercent: xPercentRef.current })
    if (fourthText.current)
      gsap.set(fourthText.current, { xPercent: xPercentRef.current })
    requestAnimationFrame(animate)
    xPercentRef.current += 0.05
  }, [])

  useEffect(() => {
    if (secondText.current) {
      gsap.set(secondText.current, {
        left: (secondText.current as HTMLElement).getBoundingClientRect().width,
      })
    }
    if (thirdText.current) {
      gsap.set(thirdText.current, {
        left: (thirdText.current as HTMLElement).getBoundingClientRect().width,
      })
    }
    if (fourthText.current) {
      gsap.set(fourthText.current, {
        left: (fourthText.current as HTMLElement).getBoundingClientRect().width,
      })
    }
    requestAnimationFrame(animate)
  }, [animate])

  return (
    <>
      <div
        id="contact"
        ref={slider}
        className={`flex cursor-pointer overflow-hidden whitespace-nowrap text-4xl font-bold italic sm:text-5xl md:text-6xl  lg:text-7xl xl:text-8xl ${
          isHovered && 'justify-center'
        }`}
        onMouseEnter={() => {
          handleMouseEnter()
        }}
        onMouseLeave={() => {
          handleMouseLeave()
        }}
      >
        {!isHovered ? (
          <>
            <p ref={firstText} className="m-0 inline-block pr-8 uppercase">
              reach out -
            </p>
            <p ref={secondText} className="m-0 inline-block pr-8 uppercase">
              reach out -
            </p>
            <p ref={thirdText} className="m-0 inline-block pr-8 uppercase">
              reach out -
            </p>
            <p ref={fourthText} className="m-0 inline-block pr-8 uppercase">
              reach out -
            </p>
          </>
        ) : (
          <button
            className="w-full text-xl uppercase italic xxs:text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            onClick={handleClick}
          >
            {isCopied ? 'email copied :)' : 'click to copy email'}
          </button>
        )}
      </div>
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
