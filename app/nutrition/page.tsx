import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { nutritionTips, mealPlans } from "@/data/nutrition"

export const metadata = {
  title: "Nutrition - FitnessHub",
  description: "Expert nutrition advice and meal plans to fuel your workouts and support your fitness goals.",
}

export default function NutritionPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Nutrition Guidance</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Expert nutrition advice and meal plans to fuel your workouts and support your fitness goals
            </p>
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Nutrition Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutritionTips.map((tip) => (
              <Card key={tip.id} className="flex flex-col overflow-hidden">
                <div classNameassName="relative h-48 w-full">
                  <Image src={tip.image || "/placeholder.svg"} alt={tip.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                    {tip.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{tip.title}</CardTitle>
                  <CardDescription>By {tip.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{tip.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    asChild
                  >
                    <Link href={`/nutrition/${tip.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Meal Plans</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mealPlans.map((plan) => (
              <Card key={plan.id} className="flex flex-col overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={plan.image || "/placeholder.svg"} alt={plan.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                    {plan.goal}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>
                    {plan.calories} calories • {plan.meals} meals per day
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href={`/nutrition/meal-plans/${plan.id}`}>
                      View Meal Plan <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Calculator */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="bg-green-100 p-8 rounded-lg border border-green-200 text-center">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Macros</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Use our macro calculator to determine your ideal protein, carbohydrate, and fat intake based on your goals
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="/nutrition/calculator">
                Open Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

