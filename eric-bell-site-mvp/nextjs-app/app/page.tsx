const sections = [
  { title: 'Former Athlete', text: 'Professional athlete experience transformed into lessons on discipline, resilience, leadership, and high performance.' },
  { title: 'Development Coach', text: 'Founder of Players Development Club helping athletes and parents build confidence, emotional intelligence, leadership, and elite habits.' },
  { title: 'Technology Founder', text: 'Founder of Sino Technology Solutions focused on AI systems, cybersecurity, infrastructure, and performance-driven technology solutions.' },
];

const pillars = ['Athlete Development', 'Leadership & Mindset', 'AI & Innovation', 'Sports Technology', 'Performance Systems', 'Infrastructure Strategy'];

const insights = [
  { title: 'Why Emotional Intelligence Matters in Sports', category: 'Athlete Development' },
  { title: 'The Future of AI in Sports Organizations', category: 'Technology' },
  { title: 'Building Elite Habits Off the Court', category: 'Leadership' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,200,0.16),transparent_42%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
          <div className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">Performance • Leadership • Technology</div>
          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-none tracking-tight md:text-7xl">Building Elite <span className="block text-cyan-400">Performance Systems</span></h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-300">Former professional athlete, development coach, and technology founder helping athletes, leaders, and organizations perform at their highest level through mindset, leadership, and infrastructure.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-black transition hover:scale-105">Work With Eric</a>
            <a href="#pdc" className="rounded-2xl border border-zinc-700 px-6 py-3 font-bold transition hover:border-cyan-400">Explore PDC</a>
            <a href="#sts" className="rounded-2xl border border-zinc-700 px-6 py-3 font-bold transition hover:border-cyan-400">Explore STS</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">About Eric Bell</p>
        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">One ecosystem connecting sports, leadership, and technology.</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {sections.map((item) => (
            <div key={item.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-cyan-500/50">
              <h3 className="mb-4 text-2xl font-bold text-cyan-300">{item.title}</h3>
              <p className="leading-relaxed text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Core Pillars</p>
          <h2 className="text-4xl font-bold">The High-Performance Ecosystem</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => <div key={pillar} className="rounded-3xl border border-zinc-800 bg-black p-8 text-xl font-bold transition hover:-translate-y-1 hover:border-cyan-500/50">{pillar}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2">
        <div id="pdc" className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Players Development Club</p>
          <h3 className="mb-6 text-4xl font-bold">Human Performance Division</h3>
          <p className="mb-8 text-lg leading-relaxed text-zinc-400">Helping young athletes and parents navigate mindset, emotional intelligence, leadership, confidence, and elite development.</p>
          <ul className="space-y-3 text-zinc-300"><li>• Athlete Development Coaching</li><li>• Parent Advisory Programs</li><li>• Speaking & Workshops</li><li>• Leadership Development</li><li>• Performance Mindset Systems</li></ul>
        </div>
        <div id="sts" className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Sino Technology Solutions</p>
          <h3 className="mb-6 text-4xl font-bold">Infrastructure & AI Division</h3>
          <p className="mb-8 text-lg leading-relaxed text-zinc-400">Delivering AI systems, cybersecurity, infrastructure consulting, and technology strategy for modern organizations.</p>
          <ul className="space-y-3 text-zinc-300"><li>• AI Infrastructure</li><li>• Private Knowledgebase Systems</li><li>• Cybersecurity Consulting</li><li>• Sports IT Infrastructure</li><li>• Enterprise Technology Strategy</li></ul>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Insights & Thought Leadership</p>
          <h2 className="max-w-3xl text-4xl font-bold">Building authority through ideas, systems, and innovation.</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {insights.map((post) => <div key={post.title} className="rounded-3xl border border-zinc-800 bg-black p-8 transition hover:border-cyan-500/50"><p className="mb-4 text-sm uppercase tracking-wide text-cyan-400">{post.category}</p><h3 className="mb-6 text-2xl font-bold leading-snug">{post.title}</h3><a className="font-medium text-cyan-300" href="#">Read Insight →</a></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">Work With Eric Bell</p>
        <h2 className="mb-8 text-5xl font-black leading-tight">Building the future of <span className="block text-cyan-400">human and technical performance.</span></h2>
        <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-zinc-400">Coaching, consulting, leadership development, AI systems, speaking engagements, and performance-driven infrastructure strategy.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:homebasenc@protonmail.com" className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-black transition hover:scale-105">Book a Consultation</a>
          <a href="mailto:homebasenc@protonmail.com" className="rounded-2xl border border-zinc-700 px-8 py-4 font-bold transition hover:border-cyan-400">Contact Eric</a>
        </div>
      </section>
    </main>
  );
}
