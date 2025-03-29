import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbProps {
  items: {
    title: string
    href: string
  }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          {index === items.length - 1 ? (
            <span className="font-medium text-foreground">{item.title}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
} 