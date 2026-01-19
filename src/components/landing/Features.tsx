"use client"

import { motion } from "framer-motion"
import { Rocket, TrendingUp, Users, Zap, Trophy, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Launch & Get Noticed",
    description: "Market your project as the 'lamest' - paradoxically, the best way to go viral.",
  },
  {
    icon: TrendingUp,
    title: "Climb the Leaderboard",
    description: "Compete for the top spot on weekly and all-time 'lamest' project rankings.",
  },
  {
    icon: Users,
    title: "Build Your Audience",
    description: "Collect waitlist signups and connect with early adopters who love your idea.",
  },
  {
    icon: Zap,
    title: "Real-Time Engagement",
    description: "Chat directly with founders, investors, and fellow builders in the community.",
  },
  {
    icon: Trophy,
    title: "Gamified Growth",
    description: "Earn badges, level up your maker score, and unlock achievements.",
  },
  {
    icon: MessageSquare,
    title: "Instant Feedback",
    description: "Get real votes and comments from the tech community that matters.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="bg-gradient-to-r from-primary-300 to-accent bg-clip-text text-transparent">
              Why Go Lame?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The unconventional platform for builders who want to stand out in a sea of sameness.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-900/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
