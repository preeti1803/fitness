import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "FitnessHub's workout programs helped me lose 30 pounds in 6 months. The nutrition guidance was a game-changer for my diet.",
    author: "Sarah Johnson",
    title: "Lost 30 lbs in 6 months",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "As a busy professional, I needed workouts that were efficient but effective. FitnessHub's HIIT programs fit perfectly into my schedule.",
    author: "Michael Chen",
    title: "Gained 12 lbs of muscle",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "The meal plans are easy to follow and delicious. I've never felt deprived, and I've seen amazing results in my energy levels and performance.",
    author: "Jessica Williams",
    title: "Improved marathon time by 15 min",
    avatar: "/images/testimonial-3.jpg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Success Stories</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real people who transformed their fitness with FitnessHub
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-green-50 border">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-green-600 font-medium">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

