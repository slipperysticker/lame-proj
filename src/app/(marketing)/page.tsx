"use client"

import dynamic from "next/dynamic"
import Features from "@/components/landing/Features"
import CTASection from "@/components/landing/CTASection"

// Dynamically import Hero3D to avoid SSR issues with Three.js
const Hero3D = dynamic(() => import("@/components/landing/Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] md:h-[700px] flex items-center justify-center">
      <div className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-space-grotesk)]">
        <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent bg-clip-text text-transparent animate-pulse">
          LAME
        </span>
      </div>
    </div>
  ),
})

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with 3D Effect */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/10 via-background to-background" />

        <div className="relative z-10">
          {/* 3D Canvas */}
          <Hero3D />

          {/* Hero Text Content */}
          <div className="container mx-auto px-4 -mt-32 relative z-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
                Market Your{" "}
                <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent bg-clip-text text-transparent">
                  Lame
                </span>{" "}
                Startup
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                The gamified platform where entrepreneurs embrace the paradox: being the{" "}
                <span className="text-primary-300 font-semibold">lamest</span> is actually the
                coolest way to go viral.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>For Builders & Founders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-400" />
                  <span>Backed by VCs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Y Combinator Alumni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Built with ❤️ by{" "}
              <a
                href="https://github.com/slipperysticker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-primary-400 transition-colors"
              >
                @slipperysticker
              </a>
            </p>
            <p>
              Powered by Next.js, Three.js, and a whole lot of{" "}
              <span className="text-primary-300">lame</span> energy.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
