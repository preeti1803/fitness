import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to SiteSmith
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Your AI-powered website builder
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </main>
  )
} 