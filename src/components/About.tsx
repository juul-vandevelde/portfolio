import Image from 'next/image'
import foldImage from '../../public/assets/juul.jpg'

function About() {
  return (
    <section
      id="about"
      className="mb-10 pt-10 sm:relative sm:grid sm:grid-cols-2 md:mb-14 md:pt-20 lg:mb-16 xl:mb-20"
    >
      <div className="flex flex-col justify-between sm:mr-8">
        <article className="flex flex-col gap-8 font-light sm:gap-10 md:gap-14 md:text-lg lg:gap-16 lg:text-xl xl:gap-20 xl:text-2xl">
          <p>
            Multimedia & Creative
            <br />
            Technologies <strong>student</strong> based in
            <br />
            Belgium
          </p>
          <p className="fold:ml-auto fold:inline">
            <strong>Crafting pastries</strong> on weekends
            <br />
            while pursuing my passion for
            <br />
            technology and design
          </p>
          <p>
            Driven by a <strong>love for progress</strong>,<br />
            learning, and innovation in every
            <br />
            endeavor
          </p>
        </article>
        <div className="sticky bottom-0 py-4 pr-4 text-right font-bold text-4xl uppercase italic sm:py-0 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          full
          <br />
          stack
          <br />
          developer
        </div>
      </div>
      <Image
        src={foldImage}
        alt="Picture of Juul Van de Velde working in a bakery"
        priority={true}
        className="w-full object-cover"
        placeholder="blur"
      />
    </section>
  )
}

export default About
