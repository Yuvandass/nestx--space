import {
  Bot,
  Brain,
  Database,
  Settings,
  Zap,
  Users,
  Target,
  Code,
  MessageSquare,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { ContactSection } from "@/components/contact-section"
import { BrandLogo } from "@/components/brand-logo"
import { NestXFooter } from "@/components/ui/footer-section"
import { AuroraCTA } from "@/components/ui/aurora-flow"
import { SparklesHero } from "@/components/ui/sparkles-hero"
import { GlassCard } from "@/components/ui/glass-card"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

const navItems = [
  {
    name: "Services",
    url: "#services",
    icon: Settings,
  },
  {
    name: "About",
    url: "#about",
    icon: Users,
  },
  {
    name: "Use Cases",
    url: "#use-cases",
    icon: Target,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: MessageSquare,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Global Background Animation */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(30, 0, 50)"
          gradientBackgroundEnd="rgb(0, 0, 20)"
          firstColor="147, 51, 234"
          secondColor="168, 85, 247"
          thirdColor="196, 181, 253"
          fourthColor="139, 92, 246"
          fifthColor="124, 58, 237"
          pointerColor="147, 51, 234"
          size="80%"
          blendingValue="multiply"
          containerClassName="opacity-40"
          interactive={true}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <BrandLogo />
        <NavBar items={navItems} />

        {/* Hero Section */}
        <div className="relative">
          <HeroGeometric
            badge="Welcome to NestX.Space"
            title1="Your Smartest AI Agent"
            title2="Partner"
            description="NestX.Space builds custom AI agents that think, learn, and work just like your ideal team member. Whether you need customer support, marketing automation, research assistants, or personal productivity tools — we create agents tailored to your needs."
          />
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/80 z-20"></div>
        </div>

        {/* What We Offer Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32 relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-20"></div>

          <div className="absolute inset-0 z-0">
            <BackgroundGradientAnimation
              gradientBackgroundStart="rgb(20, 0, 40)"
              gradientBackgroundEnd="rgb(0, 0, 15)"
              firstColor="139, 92, 246"
              secondColor="124, 58, 237"
              thirdColor="168, 85, 247"
              fourthColor="147, 51, 234"
              fifthColor="196, 181, 253"
              pointerColor="139, 92, 246"
              size="60%"
              blendingValue="overlay"
              containerClassName="opacity-20 h-full"
              interactive={false}
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                ⚡ What We <span className="text-purple-400">Offer</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">🤖 Custom AI Agents</h3>
                  <p className="text-slate-400">for business workflows</p>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">🧠 Autonomous Decision-Making</h3>
                  <p className="text-slate-400">using the latest LLMs</p>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">📊 Integrations</h3>
                  <p className="text-slate-400">with APIs, databases, CRMs, and more</p>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">🛠️ No-Code Dashboards</h3>
                  <p className="text-slate-400">for control and transparency</p>
                </div>
              </GlassCard>
            </div>
          </div>
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-20"></div>
        </section>

        {/* Who We Help Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32 relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20"></div>

          <div className="absolute inset-0 z-0">
            <BackgroundGradientAnimation
              gradientBackgroundStart="rgb(25, 0, 45)"
              gradientBackgroundEnd="rgb(0, 0, 25)"
              firstColor="168, 85, 247"
              secondColor="147, 51, 234"
              thirdColor="124, 58, 237"
              fourthColor="196, 181, 253"
              fifthColor="139, 92, 246"
              pointerColor="168, 85, 247"
              size="70%"
              blendingValue="soft-light"
              containerClassName="opacity-25 h-full"
              interactive={false}
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                🎯 Who We <span className="text-purple-400">Help</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="high">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Startups</h3>
                  <p className="text-slate-400">needing lean, automated operations</p>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="high">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Enterprises</h3>
                  <p className="text-slate-400">scaling repetitive workflows</p>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="high">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Creators & Solopreneurs</h3>
                  <p className="text-slate-400">who need a digital assistant</p>
                </div>
              </GlassCard>
            </div>
          </div>
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/30 to-black/90 z-20"></div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 pt-32 relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/90 via-black/30 to-transparent z-20"></div>

          <div className="absolute inset-0 z-0">
            <BackgroundGradientAnimation
              gradientBackgroundStart="rgb(35, 0, 60)"
              gradientBackgroundEnd="rgb(0, 0, 30)"
              firstColor="124, 58, 237"
              secondColor="196, 181, 253"
              thirdColor="147, 51, 234"
              fourthColor="168, 85, 247"
              fifthColor="139, 92, 246"
              pointerColor="124, 58, 237"
              size="90%"
              blendingValue="multiply"
              containerClassName="opacity-30 h-full"
              interactive={false}
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Demo <span className="text-purple-400">Use Cases</span>
              </h2>
              <p className="text-xl text-slate-400">See how our AI agents transform your workflows</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="high">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">Customer Support Agent</h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Handles 80% of common queries with intelligent responses and seamless escalation.
                  </p>
                  <div className="flex items-center text-purple-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>24/7 availability</span>
                  </div>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="high">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">Sales Assistant</h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Cold emails, follow-ups, CRM updates, and lead qualification automation.
                  </p>
                  <div className="flex items-center text-purple-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Increased conversion rates</span>
                  </div>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="high">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">Research Agent</h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Reads 100 pages and gives a 1-pager summary with key insights and recommendations.
                  </p>
                  <div className="flex items-center text-purple-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Save hours of research time</span>
                  </div>
                </div>
              </GlassCard>
              <GlassCard glowColor="orange" customSize className="w-full h-auto" intensity="high">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Code className="w-8 h-8 text-orange-400 mr-3" />
                    <h3 className="text-2xl font-semibold text-white">Developer Copilot</h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Debugs, writes code, reviews PRs, and maintains documentation automatically.
                  </p>
                  <div className="flex items-center text-orange-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Faster development cycles</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-black/50 to-black/95 z-20"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 pt-32 relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/95 via-black/50 to-transparent z-20"></div>

          <div className="absolute inset-0 z-0">
            <BackgroundGradientAnimation
              gradientBackgroundStart="rgb(40, 0, 70)"
              gradientBackgroundEnd="rgb(0, 0, 35)"
              firstColor="196, 181, 253"
              secondColor="139, 92, 246"
              thirdColor="168, 85, 247"
              fourthColor="124, 58, 237"
              fifthColor="147, 51, 234"
              pointerColor="196, 181, 253"
              size="75%"
              blendingValue="overlay"
              containerClassName="opacity-35 h-full"
              interactive={false}
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Building the <span className="text-purple-400">Future of Work</span>
                </h2>
                <p className="text-xl text-slate-400 mb-6 leading-relaxed">
                  At NestX.Space, we're building the future of work. Our team combines expertise in AI, automation, and
                  product design to develop AI agents that don't just assist — they act.
                </p>
                <p className="text-lg text-slate-400 mb-8">
                  With cutting-edge tools like GPT-4.5, vector databases, and autonomous task execution, we deliver
                  agents that do the job, not just suggest answers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-white">Custom AI agent development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-white">Seamless integrations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-white">From idea to execution, fast</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <GlassCard glowColor="purple" customSize className="w-full h-96" intensity="high">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Bot className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">NestX.Space</h3>
                      <p className="text-slate-400">AI Agents That Act</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-black/40 to-black z-20"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 pt-32 relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-black via-black/40 to-transparent z-20"></div>

          <div className="absolute inset-0 z-0">
            <BackgroundGradientAnimation
              gradientBackgroundStart="rgb(45, 0, 80)"
              gradientBackgroundEnd="rgb(0, 0, 40)"
              firstColor="147, 51, 234"
              secondColor="124, 58, 237"
              thirdColor="196, 181, 253"
              fourthColor="139, 92, 246"
              fifthColor="168, 85, 247"
              pointerColor="147, 51, 234"
              size="85%"
              blendingValue="soft-light"
              containerClassName="opacity-25 h-full"
              interactive={false}
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-purple-400">Services</span>
              </h2>
              <p className="text-xl text-slate-400">Comprehensive AI agent solutions for your business</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">AI Agent Setup</h3>
                  <p className="text-slate-400 mb-4">Custom agents for internal or external tasks</p>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">Starting at $2,999</Badge>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">API Integration</h3>
                  <p className="text-slate-400 mb-4">Agents that talk to your tools</p>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">Custom Pricing</Badge>
                </div>
              </GlassCard>
              <GlassCard glowColor="purple" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Workflow Automation</h3>
                  <p className="text-slate-400 mb-4">Task scheduling, reminders, etc.</p>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">From $1,499</Badge>
                </div>
              </GlassCard>
              <GlassCard glowColor="orange" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Dedicated Agent Hosting</h3>
                  <p className="text-slate-400 mb-4">24/7 agents running in the cloud</p>
                  <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">$299/month</Badge>
                </div>
              </GlassCard>
              <GlassCard glowColor="red" customSize className="w-full h-auto" intensity="medium">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Maintenance & Support</h3>
                  <p className="text-slate-400 mb-4">Ongoing optimization and updates</p>
                  <Badge className="bg-red-500/10 text-red-400 border-red-500/20">$199/month</Badge>
                </div>
              </GlassCard>
            </div>
          </div>
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/60 to-black z-20"></div>
        </section>

        {/* Brand Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32 relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/60 to-transparent z-20"></div>

          <div className="absolute inset-0 z-0">
            <BackgroundGradientAnimation
              gradientBackgroundStart="rgb(50, 0, 90)"
              gradientBackgroundEnd="rgb(0, 0, 45)"
              firstColor="168, 85, 247"
              secondColor="196, 181, 253"
              thirdColor="139, 92, 246"
              fourthColor="147, 51, 234"
              fifthColor="124, 58, 237"
              pointerColor="168, 85, 247"
              size="65%"
              blendingValue="multiply"
              containerClassName="opacity-20 h-full"
              interactive={false}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <GlassCard glowColor="white" customSize className="w-full h-auto" intensity="low">
              <div className="p-12">
                <h2 className="text-4xl font-bold text-white mb-8">
                  Why <span className="text-purple-400">"NestX.Space"</span>?
                </h2>
                <div className="text-lg text-slate-400 leading-relaxed space-y-4">
                  <p>
                    The <strong className="text-white">"Nest"</strong> symbolizes a place where ideas grow.
                    <strong className="text-purple-400"> "X"</strong> represents the unknown frontier — and
                    <strong className="text-purple-400"> "Space"</strong> is the limitless domain we operate in.
                  </p>
                  <p>Together, it means building intelligent, adaptable agents in a new era of digital life.</p>
                </div>
              </div>
            </GlassCard>
          </div>
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-b from-transparent via-black/70 to-black z-20"></div>
        </section>

        {/* Sparkles Hero Section */}
        <div className="relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-52 bg-gradient-to-b from-black via-black/70 to-transparent z-20"></div>
          <SparklesHero />
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/50 to-black z-20"></div>
        </div>

        {/* Aurora CTA Section */}
        <div className="relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/50 to-transparent z-20"></div>
          <AuroraCTA />
          {/* Crossfade transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-black/60 to-black z-20"></div>
        </div>

        {/* Contact Section */}
        <div className="relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black via-black/60 to-transparent z-20"></div>
          <ContactSection />
          {/* Crossfade transition to footer */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/80 to-black z-20"></div>
        </div>

        {/* Footer */}
        <div className="relative">
          {/* Crossfade from previous section */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20"></div>
          <NestXFooter />
        </div>
      </div>
    </div>
  )
}
