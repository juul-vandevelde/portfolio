import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="font-bold text-4xl">404</h1>
      <p className="mt-4 text-xl">Page not found</p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-80"
      >
        Go home
      </Link>
    </div>
  )
}
