"use client"

import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Globe, Twitter, Calendar, MapPin, Mail, Edit } from "lucide-react"
import Link from "next/link"

// Mock user data - will be replaced with tRPC in Phase 4
const mockUser = {
  id: "1",
  name: "Sarah Chen",
  username: "@sarahchen",
  email: "sarah@example.com",
  bio: "Building cool stuff on the internet. Founder of several lame projects. YC S22.",
  image: "",
  website: "https://sarahchen.dev",
  twitter: "sarahchen_dev",
  github: "sarahchen",
  location: "San Francisco, CA",
  joinedDate: "January 2024",
  projects: [
    {
      id: 1,
      name: "Yet Another Todo App",
      tagline: "Because the world needs more todo apps",
      votes: 1247,
      image: null,
    },
    {
      id: 2,
      name: "AI Pet Rock",
      tagline: "Your rock, but smarter. Powered by GPT-5",
      votes: 743,
      image: null,
    },
  ],
  stats: {
    projects: 2,
    votes: 1990,
    followers: 342,
    following: 128,
  },
  badges: ["Early Adopter", "Top Voter", "Maker"],
}

export default function ProfilePage({ params }: { params: { id: string } }) {
  const { data: session } = useSession()
  const isOwnProfile = session?.user?.id === params.id

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Avatar className="w-24 h-24 border-4 border-primary-300">
              <AvatarImage src={mockUser.image} alt={mockUser.name} />
              <AvatarFallback className="text-2xl bg-primary-900 text-primary-300">
                {mockUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h1 className="text-2xl font-bold mb-1">{mockUser.name}</h1>
                <p className="text-muted-foreground">{mockUser.username}</p>
              </div>
              {isOwnProfile && (
                <Link href="/settings">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </Link>
              )}
            </div>

            <p className="text-foreground mb-4">{mockUser.bio}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              {mockUser.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{mockUser.location}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {mockUser.joinedDate}</span>
              </div>
              {mockUser.email && (
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>{mockUser.email}</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 mb-4">
              {mockUser.website && (
                <a
                  href={mockUser.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-primary-400 transition-colors"
                >
                  <Globe className="w-4 h-4 inline mr-1" />
                  Website
                </a>
              )}
              {mockUser.twitter && (
                <a
                  href={`https://twitter.com/${mockUser.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-primary-400 transition-colors"
                >
                  <Twitter className="w-4 h-4 inline mr-1" />
                  Twitter
                </a>
              )}
              {mockUser.github && (
                <a
                  href={`https://github.com/${mockUser.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-primary-400 transition-colors"
                >
                  <Github className="w-4 h-4 inline mr-1" />
                  GitHub
                </a>
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {mockUser.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="outline"
                  className="border-primary-300 text-primary-300"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold">{mockUser.stats.projects}</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{mockUser.stats.votes}</div>
            <div className="text-sm text-muted-foreground">Votes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{mockUser.stats.followers}</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{mockUser.stats.following}</div>
            <div className="text-sm text-muted-foreground">Following</div>
          </div>
        </div>
      </Card>

      {/* Projects Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-4">
          {mockUser.projects.map((project) => (
            <Card key={project.id} className="p-6 hover:border-primary-400 transition-all">
              <div className="flex gap-4">
                {/* Vote Count */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-lg border-2 border-border flex items-center justify-center">
                    <span className="text-sm font-semibold">{project.votes}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">votes</span>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 hover:text-primary-300 transition-colors cursor-pointer">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground">{project.tagline}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Coming Soon Notice */}
      <Card className="p-8 text-center border-dashed">
        <p className="text-muted-foreground mb-2">
          🚀 Full profile editing and following coming in Phase 6
        </p>
        <p className="text-sm text-muted-foreground">
          This is a preview with mock data. Real user data will be loaded from the database in Phase 4.
        </p>
      </Card>
    </div>
  )
}
