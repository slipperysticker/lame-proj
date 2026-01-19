"use client"

import { Trophy, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const mockTopProjects = [
  { id: 1, name: "Yet Another Todo App", votes: 1247, trend: "up" },
  { id: 2, name: "Blockchain for Cats", votes: 892, trend: "up" },
  { id: 3, name: "AI Pet Rock", votes: 743, trend: "same" },
  { id: 4, name: "Web3 Calculator", votes: 621, trend: "down" },
  { id: 5, name: "NFT Screenshot Tool", votes: 534, trend: "up" },
]

function ProjectRank({
  rank,
  project,
}: {
  rank: number
  project: typeof mockTopProjects[0]
}) {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-card/50 transition-colors rounded-lg group">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
          rank === 1
            ? "bg-yellow-500/20 text-yellow-500"
            : rank === 2
            ? "bg-gray-300/20 text-gray-300"
            : rank === 3
            ? "bg-orange-500/20 text-orange-500"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {rank}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate group-hover:text-primary-300 transition-colors">
          {project.name}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs text-muted-foreground">{project.votes} votes</p>
          {project.trend === "up" && <TrendingUp className="w-3 h-3 text-green-500" />}
          {project.trend === "down" && <TrendingUp className="w-3 h-3 text-red-500 rotate-180" />}
        </div>
      </div>
    </div>
  )
}

export default function RightSidebar() {
  return (
    <div className="p-4">
      {/* Top Lamest Projects */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary-300" />
            Top Lamest
          </h2>
          <Button variant="ghost" size="sm" className="text-xs">
            <Clock className="w-3 h-3 mr-1" />
            Weekly
          </Button>
        </div>

        <div className="space-y-1">
          {mockTopProjects.map((project, index) => (
            <ProjectRank key={project.id} rank={index + 1} project={project} />
          ))}
        </div>

        <Link href="/rankings">
          <Button variant="outline" className="w-full mt-4" size="sm">
            View Full Leaderboard
          </Button>
        </Link>
      </div>

      {/* Quick Chat */}
      <div className="border-t border-border pt-6">
        <h2 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-4">
          Messages
        </h2>

        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2 hover:bg-card/50 transition-colors rounded-lg cursor-pointer"
            >
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary-900/20 text-primary-300">
                    U{i}
                  </AvatarFallback>
                </Avatar>
                {i === 1 && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">User {i}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {i === 1 ? "Typing..." : "Great project!"}
                </p>
              </div>
              {i === 1 && (
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
              )}
            </div>
          ))}
        </div>

        <Link href="/messages">
          <Button variant="outline" className="w-full mt-4" size="sm">
            View All Messages
          </Button>
        </Link>

        <div className="mt-6 p-4 bg-card rounded-lg border border-border">
          <p className="text-sm text-muted-foreground text-center">
            💬 Real-time chat coming in Phase 5
          </p>
        </div>
      </div>
    </div>
  )
}
