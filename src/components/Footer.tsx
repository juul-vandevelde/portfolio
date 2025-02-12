import Link from 'next/link'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col-reverse sm:flex-row items-center gap-2 sm:justify-between pb-5 sm:pb-10">
      <p className="sm:text-xl">© {currentYear} - Juul Van de Velde</p>
      <div className="flex flex-row gap-14">
        <Link
          href="https://www.linkedin.com/in/juul-vandevelde/"
          rel="noopener noreferrer"
          target="_blank"
          className="sm:text-xl hover:underline"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/juul-vandevelde"
          rel="noopener noreferrer"
          target="_blank"
          className="sm:text-xl hover:underline"
        >
          Github
        </Link>
      </div>
    </footer>
  )
}

export default Footer
