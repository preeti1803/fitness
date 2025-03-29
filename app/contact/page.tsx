'use client'

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Breadcrumb } from "@/components/ui/breadcrumb"

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, you would send this data to your API
      console.log('Form submitted:', formData)
      
      toast.success('Message sent successfully!')
      // Reset form data
      setFormData(initialFormData)
      // router.push('/contact/success')
      alert("message sent successfully")
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="container px-4 md:px-6 py-4">
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: "Contact", href: "/contact" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-4 text-xl text-muted-foreground">Have questions or feedback? We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide as much detail as possible..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">support@fitnesshub.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-muted-foreground">
                        123 Fitness Street
                        <br />
                        San Francisco, CA 94103
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "How do I cancel my subscription?",
                      answer: "You can cancel your subscription at any time from your account settings page.",
                    },
                    {
                      question: "Can I get a refund?",
                      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
                    },
                    {
                      question: "Do you offer custom workout plans?",
                      answer:
                        "Yes, our premium tier includes personalized workout plans created by our fitness experts.",
                    },
                  ].map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-medium text-green-600">{faq.question}</h3>
                      <p className="text-muted-foreground mt-1">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}