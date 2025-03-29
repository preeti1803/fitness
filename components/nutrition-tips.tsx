import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { nutritionTips } from "@/data/nutrition"

export default function NutritionTips() {
  // Get 3 featured nutrition tips
  const featuredTips = nutritionTips.slice(0, 3)

  return (
    <section id="nutrition" className="py-20 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nutrition Guidance</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert nutrition advice to fuel your workouts and support your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredTips.map((tip) => (
            <Card key={tip.id} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
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
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50" asChild>
                  <Link href={`/nutrition/${tip.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <Link href="/nutrition">
              View All Nutrition Tips <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

