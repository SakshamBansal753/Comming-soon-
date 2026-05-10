import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/skilss")({
	component: About,
	head: () => ({
		meta: [
			{ title: "About Us | Agent Skills" },
			{
				name: "description",
				content: "Learn more about the team behind Agent Skills.",
			},
		],
	}),
});

function About() {
	return (
		<main className="page-wrap px-4 py-12">
			<div className="grid gap-6">
				{/* Hero Card */}
				<section className="island-shell rounded-2xl p-6 sm:p-8">
					<p className="island-kicker mb-2">About</p>

					<h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
						A small starter with room to grow.
					</h1>

					<p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
						TanStack Start gives you type-safe routing, server functions, and
						modern SSR defaults. Use this as a clean foundation, then layer in
						your own routes, styling, and add-ons.
					</p>
				</section>

				{/* Mission Card */}
				<section className="island-shell rounded-2xl p-6 sm:p-8">
					<p className="island-kicker mb-2">Mission</p>

					<h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)]">
						Built for developers who move fast.
					</h2>

					<p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
						Our goal is to provide a clean and scalable starting point for
						modern web applications. Focus on building features instead of
						repeating boilerplate setup for every new project.
					</p>
				</section>

				{/* Vision Card */}
				<section className="island-shell rounded-2xl p-6 sm:p-8">
					<p className="island-kicker mb-2">Vision</p>

					<h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)]">
						Simple foundations, powerful possibilities.
					</h2>

					<p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
						We believe developer experience matters. By combining modern tools,
						clear structure, and scalable patterns, teams can ship products
						faster with confidence.
					</p>
				</section>

				{/* Technology Card */}
				<section className="island-shell rounded-2xl p-6 sm:p-8">
					<p className="island-kicker mb-2">Technology</p>

					<h2 className="mb-3 text-3xl font-bold text-[var(--sea-ink)]">
						Powered by the modern React ecosystem.
					</h2>

					<p className="max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
						This starter uses TanStack Router, React, TypeScript, and modern
						styling utilities to create a fast and maintainable development
						experience from day one.
					</p>
				</section>
			</div>
		</main>
	);
}