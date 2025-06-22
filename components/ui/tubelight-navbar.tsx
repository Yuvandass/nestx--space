"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = items
        .map((item) => {
          const element = document.querySelector(item.url)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              name: item.name,
              top: rect.top,
              bottom: rect.bottom,
            }
          }
          return null
        })
        .filter(Boolean)

      const currentSection = sections.find((section) => section && section.top <= 100 && section.bottom >= 100)

      if (currentSection) {
        setActiveTab(currentSection.name)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  return (
    <div className={cn("fixed top-8 left-1/2 -translate-x-1/2 z-50", className)}>
      <div className="flex items-center justify-center gap-1 bg-gray-900/95 border border-gray-800/50 backdrop-blur-lg py-2 px-4 rounded-full shadow-xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                "text-gray-300 hover:text-white",
                isActive && "text-white",
              )}
            >
              <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
              <span className="md:hidden flex items-center justify-center">
                <Icon size={20} strokeWidth={2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-gradient-to-r from-purple-500/10 to-purple-500/10 rounded-full border border-purple-500/20"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-lg">
                    <div className="absolute w-12 h-6 bg-purple-400/20 rounded-full blur-lg -top-2 -left-1" />
                    <div className="absolute w-8 h-4 bg-purple-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-3 bg-purple-400/30 rounded-full blur-sm -top-0.5 left-3" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        <div className="ml-3 pl-3 border-l border-slate-600/50">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-xs font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
