"use client"
import '../styles/globals.css'


import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Workouts", path: "/workouts" },
  { name: "Nutrition", path: "/nutrition" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="FitnessHub Logo" width={40} height={40} className="rounded-md" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              FitnessHub
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                pathname === item.path ? "text-green-600" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-green-600 hover:bg-green-50" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div> */}

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 bg-background p-6 flex flex-col gap-6 transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-lg font-medium transition-colors",
                pathname === item.path ? "text-green-600" : "text-muted-foreground hover:text-green-600",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>


      </div>
    </header>
  )
}

