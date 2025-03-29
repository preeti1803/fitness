import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedWorkouts from "@/components/featured-workouts"
import NutritionTips from "@/components/nutrition-tips"
import Testimonials from "@/components/testimonials"
import SignupPage from "@/src/app/signup/page"
import LoginPage from "@/src/app/login/page"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Your Journey to a{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  Healthier
                </span>{" "}
                You
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                FitnessHub provides science-backed workouts, nutrition plans, and expert guidance to help you achieve
                your fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link href="/workouts">
                    Explore Workouts <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  asChild
                >
                  <Link href="/nutrition">Nutrition Plans</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background bg-green-100 flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p>Trusted by 10,000+ fitness enthusiasts</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border">
                <Image
                  src="/images/hero-workout.jpg"
                  alt="Fitness training session"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Average results in</p>
                <p className="text-3xl font-bold">8 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workouts Section */}
      <FeaturedWorkouts />

      {/* Nutrition Tips Section */}
      <NutritionTips />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to transform your fitness journey?
            </h2>
            <p className="mt-4 text-xl text-white/90 max-w-2xl">
              Join thousands already using FitnessHub to reach their health and fitness goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

