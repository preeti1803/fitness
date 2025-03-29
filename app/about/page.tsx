import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import '../../styles/globals.css';

export const metadata = {
  title: "About Us - FitnessHub",
  description: "Learn about FitnessHub's mission to provide science-backed fitness and nutrition guidance.",
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About FitnessHub</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Our mission is to make fitness accessible, effective, and science-based for everyone
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  FitnessHub was founded in 2018 by a team of fitness professionals, nutritionists, and technology
                  experts who shared a common frustration: the fitness industry was full of misinformation, fad diets,
                  and ineffective workout programs.
                </p>
                <p>
                  We set out to create a platform that would cut through the noise and provide people with
                  science-backed, effective fitness and nutrition guidance that actually delivers results.
                </p>
                <p>
                  Today, FitnessHub helps thousands of people worldwide achieve their fitness goals through our
                  carefully designed workout programs, nutrition plans, and expert guidance.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/about-team.jpg" alt="FitnessHub team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Science-Based Approach",
                description:
                  "We base all our workout programs and nutrition advice on peer-reviewed scientific research, not trends or fads.",
              },
              {
                title: "Accessibility",
                description:
                  "We believe fitness should be accessible to everyone, regardless of experience level, equipment access, or time constraints.",
              },
              {
                title: "Integrity",
                description:
                  "We're honest about what works and what doesn't. No false promises or miracle solutions—just proven methods that deliver results.",
              },
              {
                title: "Personalization",
                description:
                  "We recognize that everyone's fitness journey is unique, and we provide guidance that can be adapted to individual needs and goals.",
              },
              {
                title: "Community",
                description:
                  "We foster a supportive community where members can share experiences, celebrate victories, and motivate each other.",
              },
              {
                title: "Continuous Improvement",
                description:
                  "We constantly update our programs based on the latest research and feedback from our community.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-green-600">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Experts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Nutrition Scientist",
                bio: "Ph.D. in Nutritional Sciences with 15+ years of research experience in sports nutrition.",
                image: "/images/team-1.jpg",
              },
              {
                name: "Mike Chen",
                role: "Head of Strength Training",
                bio: "Certified Strength and Conditioning Specialist with experience training professional athletes.",
                image: "/images/team-2.jpg",
              },
              {
                name: "Jessica Williams",
                role: "Yoga & Mobility Expert",
                bio: "200-hour Certified Yoga Instructor specializing in mobility for athletes and injury prevention.",
                image: "/images/team-3.jpg",
              },
              {
                name: "David Rodriguez",
                role: "HIIT & Cardio Specialist",
                bio: "Former competitive runner with expertise in designing effective cardio and HIIT programs.",
                image: "/images/team-4.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
                <p className="text-muted-foreground mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Users" },
              { number: "200+", label: "Workout Programs" },
              { number: "100+", label: "Nutrition Guides" },
              { number: "4.8/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

