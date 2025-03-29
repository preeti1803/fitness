'use client'

import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default function ContactSuccessPage() {
  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="container px-4 md:px-6 py-4">
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: "Contact", href: "/contact" },
            { title: "Success", href: "/contact/success" },
          ]}
        />
      </div>

      {/* Success Message */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Message Sent Successfully!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for contacting us. We'll get back to you as soon as possible.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Send Another Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 