"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, MessageSquare, Share2 } from "lucide-react"

const mockProjects = [
  {
    id: 1,
    name: "Yet Another Todo App",
    tagline: "Because the world needs more todo apps",
    votes: 1247,
    creator: "Sarah Chen",
    creatorAvatar: "",
    image: null,
  },
  {
    id: 2,
    name: "Blockchain for Cats",
    tagline: "Decentralized meowing on the blockchain",
    votes: 892,
    creator: "Alex Rivera",
    creatorAvatar: "",
    image: null,
  },
  {
    id: 3,
    name: "AI Pet Rock",
    tagline: "Your rock, but smarter. Powered by GPT-5",
    votes: 743,
    creator: "Jordan Lee",
    creatorAvatar: "",
    image: null,
  },
]

export default function FeedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
          Discover <span className="text-primary-300">Lame</span> Projects
        </h1>
        <p className="text-muted-foreground">
          The lamest projects launching today. Vote to make them lamer.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button variant="default" size="sm" className="bg-primary-300 hover:bg-primary-400">
          All
        </Button>
        <Button variant="outline" size="sm">
          Trending
        </Button>
        <Button variant="outline" size="sm">
          New
        </Button>
        <Button variant="outline" size="sm">
          AI/ML
        </Button>
        <Button variant="outline" size="sm">
          Web3
        </Button>
        <Button variant="outline" size="sm">
          SaaS
        </Button>
      </div>

      {/* Project Feed */}
      <div className="space-y-4">
        {mockProjects.map((project) => (
          <Card key={project.id} className="p-6 hover:border-primary-400 transition-all">
            <div className="flex gap-4">
              {/* Vote Section */}
              <div className="flex flex-col items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-12 h-12 rounded-lg border-2 hover:border-primary-300 hover:text-primary-300 flex flex-col"
                >
                  <TrendingUp className="w-5 h-5" />
                </Button>
                <span className="text-sm font-semibold">{project.votes}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 hover:text-primary-300 transition-colors cursor-pointer">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-3">{project.tagline}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>by {project.creator}</span>
                  <span>•</span>
                  <button className="hover:text-foreground transition-colors flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    12 comments
                  </button>
                  <button className="hover:text-foreground transition-colors flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-4">
        <Button variant="outline">Load More Projects</Button>
      </div>

      {/* Coming Soon Notice */}
      <Card className="p-8 text-center border-dashed">
        <p className="text-muted-foreground mb-2">
          🚀 Project submission and voting coming in Phase 4
        </p>
        <p className="text-sm text-muted-foreground">
          This is a preview of the feed layout with mock data
        </p>
      </Card>
    </div>
  )
}
