"use client"

import { SessionProvider } from "next-auth/react"
import Header from "@/components/shared/Header"
import LeftSidebar from "@/components/app/navigation/LeftSidebar"
import RightSidebar from "@/components/app/navigation/RightSidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-1 flex">
          {/* Left Sidebar - Activity Feed */}
          <aside className="hidden lg:block w-80 border-r border-border sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <LeftSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="container mx-auto px-4 py-6 max-w-4xl">{children}</div>
          </main>

          {/* Right Sidebar - Rankings & Chat */}
          <aside className="hidden xl:block w-80 border-l border-border sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <RightSidebar />
          </aside>
        </div>
      </div>
    </SessionProvider>
  )
}
