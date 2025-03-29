import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { workouts } from "@/data/workouts"

export const metadata = {
  title: "Workouts - FitnessHub",
  description:
    "Browse our collection of science-backed workout programs designed to help you reach your fitness goals.",
}

export default function WorkoutsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Workout Programs</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Science-backed workout programs designed by fitness experts to help you reach your goals
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              All Programs
            </Button>
            <Button variant="ghost">Strength</Button>
            <Button variant="ghost">Cardio</Button>
            <Button variant="ghost">HIIT</Button>
            <Button variant="ghost">Yoga</Button>
            <Button variant="ghost">Mobility</Button>
          </div>
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workouts.map((workout) => (
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
        </div>
      </section>
    </main>
  )
}

