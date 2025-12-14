import Link from 'next/link'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col-reverse items-center gap-2 pb-5 sm:flex-row sm:justify-between sm:pb-10">
      <p className="sm:text-xl">© {currentYear} - Juul Van de Velde</p>
      <div className="flex flex-row gap-14">
        <Link
          href="https://www.linkedin.com/in/juul-vandevelde/"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:underline sm:text-xl"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/juul-vandevelde"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:underline sm:text-xl"
        >
          Github
        </Link>
      </div>
    </footer>
  )
}

export default Footer
