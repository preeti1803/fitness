'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = () => {
    // In a real app, you would clear the session/token here
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Welcome to your dashboard!</p>
        </div>
      </div>
    </div>
  )
} 