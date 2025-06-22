"use client"

import { SparklesCore } from "./sparkles"

export function SparklesHero() {
  return (
    <div className="h-[50rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticleshero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#a855f7"
          speed={1}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-4 relative z-20 max-w-4xl mx-auto text-center px-4">
        <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
          NestX.Space
        </h1>

        <div className="w-full max-w-2xl mx-auto mb-8 relative">
          {/* Gradient Lines */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />
        </div>

        <p className="text-neutral-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Your smartest AI agent partner. Building intelligent agents that think, learn, and work just like your ideal
          team member.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Get Started Today
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(600px_400px_at_center,transparent_20%,white)] pointer-events-none"></div>
    </div>
  )
}
