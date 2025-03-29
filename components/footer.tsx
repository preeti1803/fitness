import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-green-50">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                FitnessHub
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Science-backed workouts, nutrition plans, and expert guidance to help you achieve your fitness goals.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Workouts</h3>
            <ul className="space-y-3">
              {["Strength Training", "Cardio", "HIIT", "Yoga", "Mobility"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Nutrition</h3>
            <ul className="space-y-3">
              {["Meal Plans", "Recipes", "Supplements", "Macros Calculator", "Diet Tips"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Our Trainers", "Blog", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} FitnessHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

