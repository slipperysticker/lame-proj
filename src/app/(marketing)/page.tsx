export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold text-center mb-8 font-[family-name:var(--font-space-grotesk)]">
          <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent bg-clip-text text-transparent">
            LAME PROJ
          </span>
        </h1>
        <p className="text-xl text-center text-muted max-w-2xl mx-auto">
          The gamified platform where entrepreneurs market their startups as the <span className="text-primary-300 font-semibold">lamest</span> projects.
        </p>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Foundation setup complete! 🎉</p>
          <p className="text-sm text-muted mt-2">Phase 1 ✅ - Ready for Phase 2: 3D Landing Page</p>
        </div>
      </div>
    </main>
  )
}
