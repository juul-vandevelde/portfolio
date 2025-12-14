'use client'

import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'
import Section from './Section'

function Reviews() {
  interface Review {
    text: string
    author: string
    link?: string
  }

  const reviews: Review[] = [
    {
      text: 'For our new website, we had contacted Juul Van de Velde. He sensed perfectly what we wanted and quickly came up with a beautiful design. For us it was important that the customer can clearly see that we deliver a premium product and that feeling had to be reflected in the website. No maze but simplicity and a clear message, if you want a heat pump you have to come to us 😊 In this he succeeded very well. People are finding their way to our product and the new site has given an extra boost to our sales.',
      author: 'Ecoterm WP',
      link: 'https://ecotermwp.be',
    },
    {
      text: 'Juul is the ideal help in building your website. He creates calm and confidence. He brings your message to its essence. In all simplicity, pure, clear and contemporary. He is a professional in optimizing, taking security into account.',
      author: 'Mom',
    },
    {
      text: "Juul Van de Velde is a web development master, seamlessly blending functionality and design. With expertise in both front-end and back-end technologies, he crafts user-friendly experiences with precision. Juul's work showcases versatility, innovation, and a commitment to exceeding client expectations.",
      author: 'ChatGPT',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length)
  }

  return (
    <Section title="what<br />others say" id="reviews">
      <div className="mb-10 mt-5 flex flex-col sm:mb-24 sm:mt-12 sm:flex-row sm:gap-6 md:mb-28 md:mt-14 md:gap-8 lg:mb-32 lg:mt-16 lg:gap-10 xl:mb-40 xl:mt-20 xl:gap-12">
        <div className="grid border-2 border-foreground p-5 sm:w-7/12 sm:p-10 md:p-11 lg:p-12 xl:p-16">
          {reviews.map((review, index) => (
            <div
              key={review.author}
              className={`col-start-1 row-start-1 ${index === currentIndex ? '' : 'invisible'}`}
              aria-hidden={index !== currentIndex}
            >
              <div className="pb-5 sm:pb-8 md:pb-9 md:text-base lg:pb-10 lg:text-lg xl:pb-12 xl:text-xl">
                {review.text}
              </div>
              {review.link ? (
                <Link
                  href={review.link}
                  rel="noopener noreferrer"
                  className="italic hover:underline xs:text-base md:text-lg lg:text-xl xl:text-2xl"
                  target="_blank"
                  tabIndex={index === currentIndex ? 0 : -1}
                >
                  {review.author}
                </Link>
              ) : (
                <div className="italic md:text-lg lg:text-xl xl:text-2xl">
                  {review.author}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex w-5/12 flex-col justify-between">
          <div className="hidden border-2 border-foreground p-8 sm:block">
            <div className="bg-linear-to-b from-foreground to-60% bg-clip-text pb-12 text-transparent">
              {reviews[(currentIndex + 1) % reviews.length].text
                .slice(0, 100)
                .split(' ')
                .slice(0, -1)
                .join(' ')}{' '}
              ...
            </div>
            <div className="italic lg:text-lg xl:text-xl">
              {reviews[(currentIndex + 1) % reviews.length].author}
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous review"
            >
              <ArrowLeftIcon size={64} weight="bold" />
            </button>
            <button type="button" onClick={handleNext} aria-label="Next review">
              <ArrowRightIcon size={64} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Reviews
