'use client'

import Image from 'next/image'
import { useState } from 'react'
import backend from '../../public/assets/backend.jpg'
import dog from '../../public/assets/doggo.jpg'
import flutter from '../../public/assets/flutter.jpg'
import frontend from '../../public/assets/frontend.jpg'
import UIUX from '../../public/assets/ui-design.jpg'
import Section from './Section'

function Skills() {
  const [currentHover, setCurrentHover] = useState<string | null>(null)

  const skills = [
    {
      name: 'UX/UI Design',
      image: UIUX,
      span: 'figma / wireframing / testing',
      alt: 'pastel colored UX wireframes',
    },
    {
      name: 'Frontend Development',
      image: frontend,
      span: 'html / css / ts / react / next.js',
      alt: 'A laptop showing a code editor with a website design',
    },
    {
      name: 'Backend Development',
      image: backend,
      span: '.net / azure / firebase / node.js',
      alt: 'An AI generated image of a data center',
    },
    {
      name: 'Flutter Development',
      image: flutter,
      span: 'dart / flutter',
      alt: 'A laptop and a phone showing a flutter app design',
    },
  ]

  return (
    <Section title="what i do" id="skills">
      <div className="my-5 flex flex-col gap-5 sm:my-12 sm:flex-row sm:items-center sm:gap-9 md:my-14 md:gap-12 lg:my-16 lg:gap-16 xl:my-20 xl:gap-20">
        <div className="sm:w-1/2">
          {skills.map(skill => (
            <Image
              key={skill.name}
              src={skill.image}
              alt={skill.alt}
              className={`mb-2 ${currentHover === skill.name ? 'block' : 'hidden'}`}
              placeholder="blur"
              priority={true}
              // TODO: replace priority with a function that checks if the image is in the viewport to improve performance
            />
          ))}
          <Image
            src={dog}
            alt="A dog with glasses doing work on an ipad"
            className={`mb-2 ${currentHover ? 'hidden' : 'block'}`}
            placeholder="blur"
          />
          <span className="hidden uppercase italic tracking-widest sm:block sm:text-nowrap lg:text-lg xl:text-2xl">
            {currentHover
              ? skills.find(skill => skill.name === currentHover)?.span
              : 'hover over a topic to see my skills'}
          </span>
          <span className="uppercase italic tracking-widest sm:hidden sm:text-nowrap lg:text-lg xl:text-2xl">
            {currentHover
              ? skills.find(skill => skill.name === currentHover)?.span
              : 'select a topic to see my skills'}
          </span>
        </div>
        <ul className="cursor-default font-bold text-2xl xs:text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {skills.map(skill => (
            <li key={skill.name}>
              <button
                type="button"
                className="w-full cursor-default! py-1 xs:py-2 text-left text-stone-500 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none md:py-3 lg:py-4"
                onMouseEnter={() => setCurrentHover(skill.name)}
                onMouseLeave={() => setCurrentHover(null)}
                onClick={() => setCurrentHover(skill.name)}
              >
                {skill.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Skills
