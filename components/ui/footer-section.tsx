"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Linkedin, Moon, Send, Sun, Twitter, Bot } from "lucide-react"

function NestXFooter() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-gray-800 bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="relative">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NestX.Space</span>
            </div>
            <p className="mb-6 text-slate-400">
              Join our newsletter for the latest AI agent updates and exclusive insights.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-gray-900 border-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-green-500/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <nav className="space-y-2 text-sm">
              <a href="#services" className="block text-slate-400 transition-colors hover:text-green-400">
                AI Agent Setup
              </a>
              <a href="#services" className="block text-slate-400 transition-colors hover:text-green-400">
                API Integration
              </a>
              <a href="#services" className="block text-slate-400 transition-colors hover:text-green-400">
                Workflow Automation
              </a>
              <a href="#services" className="block text-slate-400 transition-colors hover:text-green-400">
                Agent Hosting
              </a>
              <a href="#services" className="block text-slate-400 transition-colors hover:text-green-400">
                Maintenance & Support
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-slate-400">
              <p>San Francisco, CA</p>
              <p>United States</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: hello@nestx.space</p>
            </address>
          </div>

          {/* Social Media & Dark Mode */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-gray-900 border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-gray-900 border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-slate-400" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-green-500"
              />
              <Moon className="h-4 w-4 text-slate-400" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center md:flex-row">
          <p className="text-sm text-slate-500">
            © 2024 NestX.Space. All rights reserved. Building the future of work with intelligent AI agents.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-slate-400 transition-colors hover:text-green-400">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 transition-colors hover:text-green-400">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 transition-colors hover:text-green-400">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { NestXFooter }
