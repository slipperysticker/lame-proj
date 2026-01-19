"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { Camera, Save } from "lucide-react"

export default function SettingsPage() {
  const { data: session } = useSession()

  // Mock form state - will connect to tRPC in Phase 4
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    username: "",
    bio: "",
    website: "",
    twitter: "",
    github: "",
    location: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call - TODO: Connect to tRPC in Phase 4
    setTimeout(() => {
      toast.success("Profile updated successfully!")
      setIsLoading(false)
    }, 1000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your profile and account settings.</p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Profile Photo</Label>
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 border-4 border-primary-300">
                <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
                <AvatarFallback className="text-xl bg-primary-900 text-primary-300">
                  {session?.user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button type="button" variant="outline" size="sm">
                <Camera className="w-4 h-4 mr-2" />
                Change Photo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Photo upload coming in Phase 4
            </p>
          </div>

          {/* Display Name */}
          <div>
            <Label htmlFor="name">Display Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your display name"
              className="mt-1"
            />
          </div>

          {/* Username */}
          <div>
            <Label htmlFor="username">Username</Label>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-muted-foreground">@</span>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                placeholder="username"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Your unique username. Can only contain letters, numbers, and underscores.
            </p>
          </div>

          {/* Bio */}
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              placeholder="Tell us about yourself..."
              className="mt-1 min-h-[100px]"
              maxLength={160}
            />
            <p className="text-sm text-muted-foreground mt-1">
              {formData.bio.length}/160 characters
            </p>
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="San Francisco, CA"
              className="mt-1"
            />
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Social Links</Label>

            <div>
              <Label htmlFor="website" className="text-sm font-normal">
                Website
              </Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                placeholder="https://yourwebsite.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="twitter" className="text-sm font-normal">
                Twitter
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-muted-foreground">twitter.com/</span>
                <Input
                  id="twitter"
                  value={formData.twitter}
                  onChange={(e) => handleChange("twitter", e.target.value)}
                  placeholder="username"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="github" className="text-sm font-normal">
                GitHub
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-muted-foreground">github.com/</span>
                <Input
                  id="github"
                  value={formData.github}
                  onChange={(e) => handleChange("github", e.target.value)}
                  placeholder="username"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              className="bg-primary-300 hover:bg-primary-400"
              disabled={isLoading}
            >
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Card>

      {/* Coming Soon Notice */}
      <Card className="p-6 border-dashed">
        <p className="text-muted-foreground text-center">
          🚀 Additional settings (notifications, privacy, account deletion) coming in Phase 6
        </p>
      </Card>
    </div>
  )
}
