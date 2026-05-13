const identityPillars = [
  {
    title: "Former Athlete",
    text: "Professional athlete experience transformed into practical lessons on discipline, resilience, leadership, and high performance."
  },
  {
    title: "Development Coach",
    text: "Founder of Players Development Club, helping athletes and parents build confidence, emotional intelligence, leadership, and elite habits."
  },
  {
    title: "Technology Founder",
    text: "Founder of Sino Technology Solutions, focused on AI systems, cybersecurity, infrastructure, and performance-driven technology solutions."
  }
];

const ecosystemPillars = [
  "Athlete Development",
  "Leadership & Mindset",
  "AI & Innovation",
  "Sports Technology",
  "Performance Systems",
  "Infrastructure Strategy"
];

const insights = [
  {
    title: "Why Emotional Intelligence Is the Hidden Advantage in Sports",
    category: "Athlete Development"
  },
  {
    title: "The Future of AI in Sports Organizations",
    category: "Technology"
  },
  {
    title: "Building Elite Habits Beyond the Game",
    category: "Leadership"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-black tracking-tight">
            Eric Bell
          </a>
          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#ecosystem" className="hover:text-cyan-300">Ecosystem</a>
            <a href="#divisions" className="hover:text-cyan-300">Ventures</a>
            <a href="#insights" className="hover:text-cyan-300">Insights</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_42%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Performance • Leadership • Technology
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Building Elite
              <span className="block text-cyan-400">Performance Systems</span>
            </h1>

            <p className="max-w-3xl text-xl leading-relaxed text-zinc-300">
              Former professional athlete, development coach, and technology founder helping athletes, leaders, and organizations perform at their highest level through mindset, leadership, and infrastructure.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
                Work With Eric
              </a>
              <a href="#divisions" className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-cyan-400">
                Explore the Ecosystem
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">About Eric Bell</p>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            One personal brand connecting sports, leadership, and technology.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {identityPillars.map((item) => (
            <article key={item.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-cyan-500/40">
              <h3 className="mb-4 text-2xl font-bold text-cyan-300">{item.title}</h3>
              <p className="leading-relaxed text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ecosystem" className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Core Pillars</p>
            <h2 className="text-4xl font-bold">The High-Performance Ecosystem</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemPillars.map((pillar) => (
              <div key={pillar} className="rounded-3xl border border-zinc-800 bg-black p-8 text-xl font-semibold transition hover:-translate-y-1 hover:border-cyan-500/40">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="divisions" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Players Development Club</p>
            <h3 className="mb-6 text-4xl font-bold">Human Performance Division</h3>
            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              Helping young athletes and parents navigate mindset, emotional intelligence, leadership, confidence, and elite development.
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li>• Athlete Development Coaching</li>
              <li>• Parent Advisory Programs</li>
              <li>• Speaking & Workshops</li>
              <li>• Leadership Development</li>
              <li>• Performance Mindset Systems</li>
            </ul>
          </article>

          <article className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Sino Technology Solutions</p>
            <h3 className="mb-6 text-4xl font-bold">Infrastructure & AI Division</h3>
            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              Delivering AI systems, cybersecurity, infrastructure consulting, and technology strategy for modern organizations.
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li>• AI Infrastructure</li>
              <li>• Private Knowledgebase Systems</li>
              <li>• Cybersecurity Consulting</li>
              <li>• Sports IT Infrastructure</li>
              <li>• Enterprise Technology Strategy</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="insights" className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Insights & Thought Leadership</p>
              <h2 className="max-w-2xl text-4xl font-bold">
                A content hub for ideas, systems, and innovation.
              </h2>
            </div>
            <a href="#contact" className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-cyan-400">
              Build the Content Hub
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {insights.map((post) => (
              <article key={post.title} className="rounded-3xl border border-zinc-800 bg-black p-8 transition hover:border-cyan-500/40">
                <p className="mb-4 text-sm uppercase tracking-wide text-cyan-400">{post.category}</p>
                <h3 className="mb-6 text-2xl font-bold leading-snug">{post.title}</h3>
                <p className="text-zinc-400">Placeholder article card for the future CMS-powered content hub.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Work With Eric Bell</p>
        <h2 className="mb-8 text-5xl font-black leading-tight">
          Building the future of
          <span className="block text-cyan-400">human and technical performance.</span>
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Coaching, consulting, leadership development, AI systems, speaking engagements, and performance-driven infrastructure strategy.
        </p>
        <a href="mailto:homebasenc@protonmail.com" className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-black transition hover:scale-105">
          Contact Eric
        </a>
      </section>
    </main>
  );
}
