import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { workouts } from "@/data/workouts"

export default function FeaturedWorkouts() {
  // Get 3 featured workouts
  const featuredWorkouts = workouts.filter((workout) => workout.featured).slice(0, 3)

  return (
    <section id="workouts" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Workouts</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Science-backed workout programs designed to help you reach your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredWorkouts.map((workout) => (
            <Card
              key={workout.id}
              className="flex flex-col overflow-hidden border-2 hover:border-green-500 transition-colors"
            >
              <div className="relative h-48 w-full">
                <Image src={workout.image || "/placeholder.svg"} alt={workout.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                  {workout.level}
                </div>
              </div>
              <CardHeader>
                <CardTitle>{workout.title}</CardTitle>
                <CardDescription>
                  {workout.duration} • {workout.targetMuscles.join(", ")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{workout.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link href={`/workouts/${workout.id}`}>
                    View Workout <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
            <Link href="/workouts">
              View All Workouts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

