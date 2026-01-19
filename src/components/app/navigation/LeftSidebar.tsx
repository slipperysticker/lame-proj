"use client"

import { Rocket, TrendingUp, MessageSquare, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mockActivities = [
  {
    id: 1,
    type: "launch",
    user: { name: "Sarah Chen", avatar: "" },
    project: "AI Code Review Bot",
    time: "2 min ago",
  },
  {
    id: 2,
    type: "milestone",
    user: { name: "Alex Rivera", avatar: "" },
    project: "TaskMaster Pro",
    votes: 50,
    time: "15 min ago",
  },
  {
    id: 3,
    type: "comment",
    user: { name: "Jordan Lee", avatar: "" },
    project: "Notion Clone",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "join",
    user: { name: "Taylor Swift", avatar: "" },
    time: "2 hours ago",
  },
]

function ActivityIcon({ type }: { type: string }) {
  switch (type) {
    case "launch":
      return <Rocket className="w-4 h-4 text-primary-300" />
    case "milestone":
      return <TrendingUp className="w-4 h-4 text-accent" />
    case "comment":
      return <MessageSquare className="w-4 h-4 text-blue-400" />
    case "join":
      return <User className="w-4 h-4 text-green-400" />
    default:
      return null
  }
}

function ActivityItem({ activity }: { activity: typeof mockActivities[0] }) {
  return (
    <div className="flex gap-3 p-3 hover:bg-card/50 transition-colors rounded-lg">
      <Avatar className="h-10 w-10 flex-shrink-0">
        <AvatarImage src={activity.user.avatar} />
        <AvatarFallback className="bg-primary-900/20 text-primary-300 text-sm">
          {activity.user.name.charAt(0)}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          <div className="mt-1">
            <ActivityIcon type={activity.type} />
          </div>
          <div className="flex-1">
            <p className="text-sm">
              <span className="font-semibold">{activity.user.name}</span>
              {activity.type === "launch" && (
                <span className="text-muted-foreground">
                  {" "}
                  launched <span className="text-foreground">{activity.project}</span>
                </span>
              )}
              {activity.type === "milestone" && (
                <span className="text-muted-foreground">
                  {" "}
                  hit {activity.votes} votes on{" "}
                  <span className="text-foreground">{activity.project}</span>
                </span>
              )}
              {activity.type === "comment" && (
                <span className="text-muted-foreground">
                  {" "}
                  commented on <span className="text-foreground">{activity.project}</span>
                </span>
              )}
              {activity.type === "join" && (
                <span className="text-muted-foreground"> joined Lame Proj</span>
              )}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LeftSidebar() {
  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-1">
          Live Updates
        </h2>
        <p className="text-sm text-muted-foreground">What's happening right now</p>
      </div>

      <div className="space-y-1">
        {mockActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>

      <div className="mt-6 p-4 bg-card rounded-lg border border-border">
        <p className="text-sm text-muted-foreground text-center">
          🔥 Real-time updates coming in Phase 5
        </p>
      </div>
    </div>
  )
}
