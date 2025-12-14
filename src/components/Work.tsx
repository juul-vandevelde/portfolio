import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

function Work({
  title,
  src,
  alt,
  description,
  link,
  mirror = false,
}: {
  title: string
  src: StaticImageData
  alt: string
  description: string
  link: string
  mirror?: boolean
}) {
  return (
    <div
      className={`my-14 flex flex-col sm:my-12 sm:flex-row md:my-14 lg:my-16 xl:my-20 ${mirror ? 'sm:flex-row-reverse' : 'flex-row'} sm:items-end gap-5 md:gap-6 lg:gap-7 xl:gap-8`}
    >
      <div className="sm:w-1/2 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          className="w-full transition duration-500 hover:scale-110"
          placeholder="blur"
        />
      </div>
      <div className={`${mirror ? 'sm:text-right' : ''}`}>
        <div className="font-bold leading-tight pb-1 text-2xl xs:text-3xl md:text-4xl lg:text-5xl xl:pb-2 xl:text-6xl">
          {title.split(/<br\s*\/?>/gi).map((part, index, array) => (
            <span key={part}>
              {part}
              {index < array.length - 1 && <br />}
            </span>
          ))}
        </div>
        <div className="font-light italic pb-1 md:pb-2 md:text-lg lg:pb-3 lg:text-xl xl:pb-4 xl:text-2xl">
          {description}
        </div>
        <Link
          href={link}
          rel="noopener noreferrer"
          className="font-bold hover:underline xs:text-base md:text-lg lg:text-xl xl:text-2xl"
          target="_blank"
        >
          visit repository -&gt;
        </Link>
      </div>
    </div>
  )
}

export default Work
