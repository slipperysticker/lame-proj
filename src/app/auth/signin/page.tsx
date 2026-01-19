"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"

export default function SignInPage() {
  const handleGitHubSignIn = () => {
    signIn("github", { callbackUrl: "/feed" })
  }

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/feed" })
  }

  const handleTwitterSignIn = () => {
    signIn("twitter", { callbackUrl: "/feed" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background via-primary-950/5 to-background">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
            <span className="bg-gradient-to-r from-primary-300 to-accent bg-clip-text text-transparent">
              LAME PROJ
            </span>
          </h1>
          <p className="text-muted-foreground">Sign in to launch your lame project</p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleGitHubSignIn}
            variant="outline"
            className="w-full h-12 text-base"
            size="lg"
          >
            <Github className="mr-2 h-5 w-5" />
            Continue with GitHub
          </Button>

          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full h-12 text-base"
            size="lg"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <Button
            onClick={handleTwitterSignIn}
            variant="outline"
            className="w-full h-12 text-base"
            size="lg"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Continue with Twitter
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-primary-300 hover:text-primary-400">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary-300 hover:text-primary-400">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            ⚠️ OAuth credentials needed to test authentication.
            <br />
            See <code className="text-primary-300">SETUP.md</code> for instructions.
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/">
            <Button variant="ghost" className="text-sm">
              ← Back to home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
