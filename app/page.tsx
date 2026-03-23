import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <span className="text-xl font-bold tracking-tight text-white">
          craw<span className="text-[#7c3aed]">god</span>
        </span>
        <div className="flex items-center gap-8 text-sm text-white/50">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#how" className="hover:text-white transition-colors">How it works</Link>
          <Link href="#team" className="hover:text-white transition-colors">Team</Link>
          <a
            href="https://twitter.com/crawgod_"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#7c3aed] text-white text-sm font-medium hover:bg-[#6d28d9] transition-colors"
          >
            Join waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/10 blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 text-[#a78bfa] text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
          Now in private beta
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 max-w-4xl">
          The AI agent that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#c026d3]">
            crawls the web
          </span>{" "}
          so you don&apos;t have to
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed">
          Crawgod is an autonomous AI agent that monitors, extracts, and delivers
          intelligence from any corner of the internet — in real time.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#"
            className="px-8 py-4 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-base transition-all shadow-lg shadow-[#7c3aed]/30"
          >
            Request early access
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 font-semibold text-base transition-all"
          >
            See how it works →
          </a>
        </div>

        <p className="mt-6 text-sm text-white/30">No credit card required · Cancel anytime</p>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for the intelligence era</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Crawgod doesn&apos;t just fetch data — it understands it, summarizes it, and delivers what actually matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl border border-white/8 bg-white/3 hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/5 transition-all group"
            >
              <div className="text-3xl mb-5">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-[#a78bfa] transition-colors">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-white/50 text-lg">Three steps from setup to intelligence</p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-6 items-start p-6 rounded-2xl border border-white/8 bg-white/3">
              <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/30 flex items-center justify-center text-[#a78bfa] font-bold text-sm shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] rounded-full bg-[#7c3aed]/10 blur-[100px]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 relative">
          Ready to let the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#c026d3]">
            god crawl
          </span>{" "}
          for you?
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto relative">
          Join the waitlist and be first to experience autonomous web intelligence.
        </p>
        <a
          href="#"
          className="relative inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#c026d3] text-white font-bold text-lg shadow-2xl shadow-[#7c3aed]/40 hover:opacity-90 transition-opacity"
        >
          Get early access
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-white/30 text-sm">
        <span>
          craw<span className="text-[#7c3aed]">god</span>.fun
        </span>
        <span>© 2026 Crawgod. All rights reserved.</span>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="https://twitter.com/crawgod_" className="hover:text-white transition-colors">X</a>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: "🕷️",
    title: "Autonomous crawling",
    desc: "Set a target and crawgod handles the rest. It navigates, extracts, and monitors any website — with zero manual maintenance.",
  },
  {
    icon: "🧠",
    title: "AI-powered understanding",
    desc: "Not just raw data. Crawgod reads, summarizes, and surfaces the insights that actually matter to you.",
  },
  {
    icon: "⚡",
    title: "Real-time alerts",
    desc: "Get notified the moment something changes. Price drops, new listings, competitor moves — crawgod catches them first.",
  },
  {
    icon: "🔗",
    title: "Deep integrations",
    desc: "Push intelligence directly to Slack, Discord, Notion, webhooks, or your own API. Your workflow, your rules.",
  },
  {
    icon: "🛡️",
    title: "Built for scale",
    desc: "From a single page to millions of URLs, crawgod scales without breaking a sweat — with built-in rate limiting and proxy rotation.",
  },
  {
    icon: "🎯",
    title: "No-code setup",
    desc: "Describe what you want in plain English. Crawgod figures out the rest — no XPath selectors, no CSS hacks.",
  },
];

const steps = [
  {
    title: "Tell crawgod what to watch",
    desc: "Paste a URL or describe your target in plain English. No selectors, no code — just your intent.",
  },
  {
    title: "Crawgod does the work",
    desc: "Our AI agent crawls, parses, and understands the content autonomously. It handles pagination, login walls, and dynamic rendering.",
  },
  {
    title: "Receive clean intelligence",
    desc: "Get structured data, summaries, or alerts delivered to your inbox, Discord, Slack, or any webhook endpoint.",
  },
];
