import { WaitlistForm } from "./components/WaitlistForm";

const PRODUCT_NAME = "Alderfi";
const GITHUB_URL = "https://github.com/alderfi/alderfi"; // repo name TBD by Banshee (HELA-449) — update if different
const DOMAIN = "alderfi.org";

const FEATURES = [
  {
    icon: "💬",
    title: "AI-Native, not AI-bolted-on",
    body: "Ask your finances anything. Get proactive insights — not a CRUD app with a chatbot glued on. Conversation is the product, not a side panel.",
  },
  {
    icon: "🔒",
    title: "Self-Hosted & Private",
    body: "Your transactions stay on your hardware. No vendor lock-in. No acquihire risk. No forced migrations when a bigger company buys your budget.",
  },
  {
    icon: "🌐",
    title: "Built on MCP",
    body: `The app is an MCP server. Use it from Claude, Cursor, your own agents, or our web UI — they're all equal clients. Your finances, any interface.`,
  },
];

const FAQS = [
  {
    q: "When can I actually use it?",
    a: "First self-hostable alpha targets mid-May 2026. Development starts in earnest after our internal May 1 go/no-go. We'll email waitlist subscribers the day the alpha ships.",
  },
  {
    q: "Is this a Hiro migration tool?",
    a: "No — but it will import your transaction history. If you have a Hiro export before May 13, keep it. We'll publish an importer in the first alpha. We're not cloning Hiro's features; we're building the open-source version of the category.",
  },
  {
    q: `How is this different from Firefly III or Actual Budget?`,
    a: `Firefly III and Actual Budget are mature, well-loved finance apps — and an MCP server bolted onto Firefly III already exists. ${PRODUCT_NAME} is different because MCP and AI aren't an add-on. The core app is an MCP server. Every feature is conversational first, a form second. Think: "I spent $45 at dinner" versus clicking through a modal.`,
  },
  {
    q: "Where does my data live?",
    a: `On your hardware. ${PRODUCT_NAME} is SQLite local-first by default. Categorization runs through a rule engine for the majority of transactions and a local LLM (Llama 3 8B via llama.cpp) for the ambiguous ones. Cloud LLMs are opt-in, never required. You can audit every query.`,
  },
  {
    q: "How will you make money, and will it ever go closed-source?",
    a: `Open-core. The self-hosted core — conversational UI, rule + local-LLM categorization, SimpleFIN and CSV import — stays free and open under Apache-2.0 forever. A hosted version with premium connectors (Plaid), cloud LLM, and multi-device sync funds the project. The open source core will not be relicensed or restricted. You can fork it at any time.`,
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-base font-bold tracking-tight text-zinc-100">
            {PRODUCT_NAME}
            <span className="ml-1 text-accent">.</span>
          </span>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:inline"
            >
              GitHub
            </a>
            <a href="#waitlist" className="btn-primary py-2 text-xs">
              Join waitlist
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28">
          {/* Subtle radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
          >
            <div className="h-[400px] w-[800px] rounded-full bg-accent/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="section-label mb-6">Open source · Self-hosted · AI-native</p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              Your AI financial assistant.{" "}
              <span className="text-accent">Open source.</span>{" "}
              <span className="text-accent">Self-hosted.</span>{" "}
              <span className="text-accent">Yours.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {PRODUCT_NAME} is the open-source, AI-native personal finance
              platform. A conversational CFO built on MCP — private by design,
              portable by default, auditable always.
            </p>

            {/* Dual CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#waitlist" className="btn-primary">
                Join the waitlist
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
              >
                Star on GitHub →
              </a>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              No spam. One email when the first alpha ships. Unsubscribe with a link.
            </p>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="border-t border-zinc-800 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700"
                >
                  <div className="mb-4 text-3xl" aria-hidden>
                    {f.icon}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-zinc-100">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why now ── */}
        <section className="border-t border-zinc-800 bg-zinc-900/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-xl font-bold text-zinc-100 sm:text-2xl">
              Why we&apos;re building this, right now.
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                On April 13, 2026, OpenAI acquired Hiro Finance. The product shuts
                down on April 20. User data is deleted May 13. Thousands of people
                who trusted an &quot;AI CFO&quot; with their budgets, categorizations,
                and financial history have four weeks to export and move on.
              </p>
              <p>
                Existing open-source finance tools — Firefly III, Actual Budget —
                are excellent but weren&apos;t designed AI-first. We&apos;re building
                the option that should have existed before Hiro was acquired: a
                conversational, self-hosted, MCP-native finance platform whose
                roadmap can&apos;t be cancelled by an acquisition.
              </p>
            </div>
          </div>
        </section>

        {/* ── Waitlist CTA block ── */}
        <section id="waitlist" className="border-t border-zinc-800 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="mb-4 text-2xl font-bold text-zinc-100">
              Be first when the alpha ships.
            </h2>
            <p className="mb-8 text-zinc-400">
              We&apos;ll email you once — when the first self-hostable alpha is
              ready. That&apos;s it. No newsletter, no drip, no growth-hacking.
            </p>
            <WaitlistForm />
          </div>
        </section>

        {/* ── Philosophy strip ── */}
        <section className="border-t border-zinc-800 bg-zinc-900/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-zinc-300">
              <span className="font-semibold text-zinc-100">
                The conversational interface IS the product.
              </span>{" "}
              Not a feature, not a dashboard add-on. Ask your AI about last
              month&apos;s subscriptions, flag unusual charges, set a budget
              goal — all in plain language, all on your machine.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
              <span>TypeScript</span>
              <span aria-hidden>·</span>
              <span>SQLite</span>
              <span aria-hidden>·</span>
              <span>Model Context Protocol</span>
              <span aria-hidden>·</span>
              <span>Apache-2.0</span>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-zinc-800 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl">
            <p className="section-label mb-4 text-center">FAQ</p>
            <h2 className="mb-12 text-center text-2xl font-bold text-zinc-100 sm:text-3xl">
              Common questions
            </h2>

            <dl className="space-y-6">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-lg border border-zinc-800 p-6"
                >
                  <dt className="mb-2 font-semibold text-zinc-100">{faq.q}</dt>
                  <dd className="text-sm leading-relaxed text-zinc-400">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-semibold text-zinc-500">
            {PRODUCT_NAME}
            <span className="text-accent">.</span>
          </span>
          <div className="flex gap-6 text-xs text-zinc-600">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-400"
            >
              GitHub
            </a>
            <a
              href={`mailto:hello@${DOMAIN}`}
              className="transition-colors hover:text-zinc-400"
            >
              hello@{DOMAIN}
            </a>
          </div>
          <p className="text-xs text-zinc-600">
            Apache-2.0 &middot; &copy; {new Date().getFullYear()} Help Tech LLC
          </p>
        </div>
      </footer>
    </div>
  );
}
