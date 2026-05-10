import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex min-h-screen ">
      {/* Sidebar */}
      <aside className="w-64 bg-grey border-r shadow-sm p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <div className="flex flex-col gap-2">
          <div className="rounded-lg px-4 py-2 hover:bg-black transition">
            Home
          </div>

          <div className="rounded-lg px-4 py-2 hover:bg-black transition">
            Profile
          </div>

          <div className="rounded-lg px-4 py-2 hover:bg-black transition">
            Settings
          </div>
        </div>
      </aside>

      {/* Content */}
      <section className="flex-1 p-6">
        <Outlet />
      </section>
    </main>
  )
}