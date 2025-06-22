"use client"
import type React from "react"
import { useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: "blue" | "purple" | "green" | "red" | "orange" | "white"
  size?: "sm" | "md" | "lg"
  width?: string | number
  height?: string | number
  customSize?: boolean
  intensity?: "low" | "medium" | "high"
}

const glowColorMap = {
  blue: { base: 120, spread: 200, color: "blue", rgb: "0,200,255" },
  purple: { base: 280, spread: 300, color: "purple", rgb: "168,85,247" },
  green: { base: 120, spread: 200, color: "green", rgb: "0,255,136" },
  red: { base: 0, spread: 200, color: "red", rgb: "255,0,0" },
  orange: { base: 30, spread: 200, color: "orange", rgb: "255,165,0" },
  white: { base: 0, spread: 0, color: "white", rgb: "255,255,255" },
}

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
}

export function GlassCard({
  children,
  className = "",
  glowColor = "white",
  size = "md",
  width,
  height,
  customSize = false,
  intensity = "medium",
}: GlassCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // For 3D card effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const { base, spread, color, rgb } = glowColorMap[glowColor]

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ""
    }
    return sizeMap[size]
  }

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties = {
      perspective: "1500px",
    }

    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height
    }

    return baseStyles
  }

  const intensityMap = {
    low: { opacity: 0.3, blur: 1 },
    medium: { opacity: 0.5, blur: 2 },
    high: { opacity: 0.7, blur: 3 },
  }

  const { opacity: glowOpacity, blur: glowBlur } = intensityMap[intensity]

  return (
    <div style={getInlineStyles()} className={getSizeClasses()}>
      <motion.div
        className="relative h-full"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 10 }}
      >
        <div className="relative group h-full">
          {/* Card glow effect */}
          <motion.div
            className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"
            animate={{
              boxShadow: [
                `0 0 10px 2px rgba(${rgb},0.05)`,
                `0 0 15px 5px rgba(${rgb},0.1)`,
                `0 0 10px 2px rgba(${rgb},0.05)`,
              ],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />

          {/* Traveling light beam effect */}
          <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
            {/* Top light beam */}
            <motion.div
              className={`absolute top-0 left-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-${color}-400 to-transparent`}
              style={{ opacity: glowOpacity, filter: `blur(${glowBlur}px)` }}
              animate={{
                left: ["-50%", "100%"],
                opacity: [0.3, glowOpacity, 0.3],
                filter: [`blur(${glowBlur - 1}px)`, `blur(${glowBlur + 1}px)`, `blur(${glowBlur - 1}px)`],
              }}
              transition={{
                left: {
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                },
                opacity: {
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                },
                filter: {
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                },
              }}
            />

            {/* Right light beam */}
            <motion.div
              className={`absolute top-0 right-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-${color}-400 to-transparent`}
              style={{ opacity: glowOpacity, filter: `blur(${glowBlur}px)` }}
              animate={{
                top: ["-50%", "100%"],
                opacity: [0.3, glowOpacity, 0.3],
                filter: [`blur(${glowBlur - 1}px)`, `blur(${glowBlur + 1}px)`, `blur(${glowBlur - 1}px)`],
              }}
              transition={{
                top: {
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                  delay: 0.6,
                },
                opacity: {
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  delay: 0.6,
                },
                filter: {
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  delay: 0.6,
                },
              }}
            />

            {/* Bottom light beam */}
            <motion.div
              className={`absolute bottom-0 right-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-${color}-400 to-transparent`}
              style={{ opacity: glowOpacity, filter: `blur(${glowBlur}px)` }}
              animate={{
                right: ["-50%", "100%"],
                opacity: [0.3, glowOpacity, 0.3],
                filter: [`blur(${glowBlur - 1}px)`, `blur(${glowBlur + 1}px)`, `blur(${glowBlur - 1}px)`],
              }}
              transition={{
                right: {
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                  delay: 1.2,
                },
                opacity: {
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  delay: 1.2,
                },
                filter: {
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  delay: 1.2,
                },
              }}
            />

            {/* Left light beam */}
            <motion.div
              className={`absolute bottom-0 left-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-${color}-400 to-transparent`}
              style={{ opacity: glowOpacity, filter: `blur(${glowBlur}px)` }}
              animate={{
                bottom: ["-50%", "100%"],
                opacity: [0.3, glowOpacity, 0.3],
                filter: [`blur(${glowBlur - 1}px)`, `blur(${glowBlur + 1}px)`, `blur(${glowBlur - 1}px)`],
              }}
              transition={{
                bottom: {
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                  delay: 1.8,
                },
                opacity: {
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  delay: 1.8,
                },
                filter: {
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  delay: 1.8,
                },
              }}
            />

            {/* Corner glow spots */}
            <motion.div
              className={`absolute top-0 left-0 h-[5px] w-[5px] rounded-full bg-${color}-400/20 blur-[1px]`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className={`absolute top-0 right-0 h-[8px] w-[8px] rounded-full bg-${color}-400/30 blur-[2px]`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2.4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                delay: 0.5,
              }}
            />
            <motion.div
              className={`absolute bottom-0 right-0 h-[8px] w-[8px] rounded-full bg-${color}-400/30 blur-[2px]`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                delay: 1,
              }}
            />
            <motion.div
              className={`absolute bottom-0 left-0 h-[5px] w-[5px] rounded-full bg-${color}-400/20 blur-[1px]`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                delay: 1.5,
              }}
            />
          </div>

          {/* Card border glow */}
          <div
            className={`absolute -inset-[0.5px] rounded-2xl bg-gradient-to-r from-${color}-400/5 via-${color}-400/10 to-${color}-400/5 opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
          />

          {/* Glass card background */}
          <div
            className={cn(
              "relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/[0.05] shadow-2xl overflow-hidden h-full",
              "hover:bg-black/50 transition-all duration-300",
              className,
            )}
          >
            {/* Subtle card inner patterns */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(135deg, white 0.5px, transparent 0.5px), linear-gradient(45deg, white 0.5px, transparent 0.5px)`,
                backgroundSize: "30px 30px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full">{children}</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
