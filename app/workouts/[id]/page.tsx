import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Dumbbell, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { workouts } from "@/data/workouts"

export function generateMetadata({ params }: { params: { id: string } }) {
  const workout = workouts.find((w) => w.id === params.id)

  if (!workout) {
    return {
      title: "Workout Not Found - FitnessHub",
      description: "The requested workout could not be found.",
    }
  }

  return {
    title: `${workout.title} - FitnessHub`,
    description: workout.description,
  }
}

export default function WorkoutPage({ params }: { params: { id: string } }) {
  const workout = workouts.find((w) => w.id === params.id)

  if (!workout) {
    return (
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Workout Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The workout you're looking for doesn't exist or has been removed.
            </p>
            <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="/workouts">Back to Workouts</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container px-4 md:px-6">
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/workouts">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Workouts
            </Link>
          </Button>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                  {workout.level}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{workout.category}</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{workout.title}</h1>

              <p className="text-xl text-muted-foreground">{workout.description}</p>

              <div className="flex flex-wrap gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>{workout.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-green-600" />
                  <span>{workout.targetMuscles.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <span>{workout.calories} calories</span>
                </div>
              </div>

              <Button className="mt-4 w-fit bg-green-600 hover:bg-green-700 text-white">Start Workout</Button>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-2xl border">
              <Image
                src={workout.image || "/placeholder.svg"}
                alt={workout.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workout Details */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Workout Plan</h2>

              <div className="space-y-6">
                {workout.exercises.map((exercise, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{exercise.name}</CardTitle>
                      <CardDescription>
                        {exercise.sets} sets • {exercise.reps} reps • {exercise.rest} rest
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exercise.instructions}</p>
                      <div className="relative h-48 w-full rounded-md overflow-hidden">
                        <Image
                          src={exercise.image || "/placeholder.svg"}
                          alt={exercise.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Tips & Notes</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-bold">Before You Start</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Always warm up for 5-10 minutes before starting this workout</li>
                      <li>Stay hydrated throughout your session</li>
                      <li>Focus on proper form rather than lifting heavier weights</li>
                      <li>If you're a beginner, start with lighter weights</li>
                    </ul>

                    <h3 className="font-bold mt-6">Equipment Needed</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {workout.equipment.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

