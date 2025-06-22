"use client"

import { Bot } from "lucide-react"
import Link from "next/link"

export function BrandLogo() {
  return (
    <Link href="/" className="fixed top-6 left-6 z-50 flex items-center space-x-3 group">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
        <Bot className="w-7 h-7 text-white" />
      </div>
      <div className="hidden lg:block">
        <span className="text-xl font-bold text-white block leading-tight">NestX.Space</span>
        <span className="text-xs text-slate-400 block leading-tight">AI Agent Partner</span>
      </div>
    </Link>
  )
}
