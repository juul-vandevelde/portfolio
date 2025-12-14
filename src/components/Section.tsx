function Section({
  title,
  id,
  children,
}: {
  title: string
  id: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="mb-10 pt-10 sm:mb-12 sm:pt-12 md:mb-14 md:pt-14 lg:mb-16 lg:pt-16 xl:mb-20 xl:pt-20"
    >
      <h1 className="text-4xl font-bold uppercase italic sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        {title.split(/<br\s*\/?>/gi).map((part, index, array) => (
          <span key={part}>
            {part}
            {index < array.length - 1 && <br />}
          </span>
        ))}
      </h1>
      {children}
    </section>
  )
}

export default Section
