"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    // Simulate API call - TODO: Connect to tRPC waitlist endpoint in Phase 4
    setTimeout(() => {
      toast.success("You're on the waitlist! We'll notify you when we launch.", {
        duration: 5000,
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-950/5 to-background" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/20 border border-primary-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary-300" />
            <span className="text-sm text-primary-300 font-medium">Coming Soon</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Ready to embrace the{" "}
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent bg-clip-text text-transparent">
              lame
            </span>
            ?
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the waitlist and be the first to launch your project when we go live. Build in
            public, gain traction, and connect with the community.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-card border-border focus:border-primary-400"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 px-8 bg-primary-300 hover:bg-primary-400 text-primary-foreground font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                "Joining..."
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </motion.form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span>Early access guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span>Free forever</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
