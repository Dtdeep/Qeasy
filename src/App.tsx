import { useEffect, useState } from "react";
import logoImg from "@/imports/Logo-1.png";

type View = "home" | "about";

const colors = {
  background: "#0F2E24",
  card: "#1A3D2E",
  mint: "#4FD1A5",
  lightMint: "#A8F0D3",
  body: "rgba(168,240,211,0.72)",
};

const navItems = [
  { label: "Features", target: "features" },
  { label: "Pricing", target: "queue-modes" },
  { label: "For Business", target: "who-for" },
  { label: "Login", target: "closing-cta" },
] as const;

const howItWorks = [
  {
    title: "Business posts their QR code",
    description:
      "Generated automatically when they register on Qeasy, with no setup needed from our team.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="6" height="6" rx="1.2" />
        <rect x="15" y="3" width="6" height="6" rx="1.2" />
        <rect x="3" y="15" width="6" height="6" rx="1.2" />
        <path d="M15 15h6M18 12v6M12 12h.01" />
      </svg>
    ),
  },
  {
    title: "Customer scans and gets a queue number",
    description:
      "No account, no app, no friction. They join instantly from any browser.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 4v4" />
        <path d="M4 7h4" />
        <rect x="6.5" y="9" width="11" height="9" rx="2" />
        <path d="M9.5 12.5h5" />
        <path d="M9.5 15h3.5" />
      </svg>
    ),
  },
  {
    title: "Customer gets real-time browser updates",
    description:
      "Premium customers get SMS or call alerts even when they are offline.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.5 21a2 2 0 0 1-3 0" />
        <path d="M12 5v4" />
      </svg>
    ),
  },
];

const queueModes = [
  {
    title: "Pay-First Mode",
    description:
      "Customer pays first, gets a receipt, and is added to the queue. Good for businesses that want guaranteed commitment before serving.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7h10v14H7z" />
        <path d="M9 11h6" />
        <path d="M9 15h4" />
      </svg>
    ),
  },
  {
    title: "Queue-First Mode",
    description:
      "Customer joins the line first, pays when called. Good for banks, schools, and restaurants where no-shows are common.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h16" />
        <path d="M12 4l4 4-4 4" />
        <path d="M12 20l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Deposit-to-Queue Mode",
    description:
      "Customer pays a small fee to reserve a spot, separate from the actual transaction. It discourages no-shows while keeping the full payment for later.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8" />
        <path d="M9.5 10.5h4.5" />
      </svg>
    ),
  },
];

const audience = [
  "Clinics and medical offices",
  "Salons and barbershops",
  "Fast food chains and restaurants",
  "Banks and cooperatives",
  "Schools and government counters",
  "Malls and multi-branch businesses",
];

function scrollToSection(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  const [view, setView] = useState<View>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  if (view === "about") {
    return (
      <AboutPage onBack={() => setView("home")} onNavigate={scrollToSection} />
    );
  }

  return <LandingPage onNavigateAbout={() => setView("about")} />;
}

function LandingPage({ onNavigateAbout }: { onNavigateAbout: () => void }) {
  return (
    <div
      className="min-h-full"
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <LandingNav onNavigateAbout={onNavigateAbout} />

      <section className="max-w-7xl mx-auto px-8 md:px-16 pt-12 pb-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-7">
          <div
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
            style={{
              backgroundColor: "rgba(79,209,165,0.12)",
              color: colors.mint,
              border: "1px solid rgba(79,209,165,0.25)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors.mint }}
            />
            No app required · Works anywhere
          </div>

          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 40%, #4FD1A5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Skip the wait,
            <br />
            not your turn.
          </h1>

          <p
            className="text-lg leading-relaxed max-w-md"
            style={{ color: colors.lightMint, opacity: 0.85 }}
          >
            Scan a QR code, get your number instantly — no app, no login, no
            hassle.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <ActionButton filled onClick={onNavigateAbout}>
              Join a Queue
            </ActionButton>
            <ActionButton onClick={onNavigateAbout}>
              For Businesses
            </ActionButton>
          </div>

          <p className="text-xs" style={{ color: "rgba(168,240,211,0.5)" }}>
            Trusted by 500+ businesses · 2M+ queues managed
          </p>
        </div>

        <div className="flex justify-center relative">
          <div
            className="absolute inset-0 m-auto rounded-full"
            style={{
              width: 380,
              height: 380,
              border: "1.5px dashed rgba(79,209,165,0.2)",
              borderRadius: "50%",
            }}
          />
          <div
            className="absolute inset-0 m-auto rounded-full"
            style={{
              width: 460,
              height: 460,
              border: "1px dashed rgba(168,240,211,0.08)",
              borderRadius: "50%",
            }}
          />

          {[
            { top: "12%", left: "8%", size: 6, opacity: 0.6 },
            { top: "75%", left: "14%", size: 4, opacity: 0.4 },
            { top: "20%", right: "6%", size: 5, opacity: 0.5 },
            { top: "65%", right: "10%", size: 7, opacity: 0.3 },
            { top: "45%", left: "4%", size: 4, opacity: 0.35 },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: dot.size,
                height: dot.size,
                backgroundColor: colors.mint,
                opacity: dot.opacity,
                top: dot.top,
                left: dot.left,
                right: dot.right,
              }}
            />
          ))}

          <div
            className="phone-float relative z-10 rounded-4xl overflow-hidden"
            style={{
              width: 240,
              height: 490,
              background: "linear-gradient(160deg, #1a3d30 0%, #122b20 100%)",
              border: "1.5px solid rgba(79,209,165,0.15)",
              borderRadius: 40,
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(79,209,165,0.08) inset",
            }}
          >
            <div className="flex justify-center pt-4 pb-2">
              <div
                className="w-20 h-1.5 rounded-full"
                style={{ backgroundColor: "rgba(79,209,165,0.15)" }}
              />
            </div>

            <div className="px-5 pt-4 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold"
                  style={{ color: colors.mint }}
                >
                  Qeasy
                </span>
                <div
                  className="bell-pulse w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(79,209,165,0.15)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={colors.mint}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1 py-5">
                <span
                  className="text-xs font-medium"
                  style={{ color: "rgba(168,240,211,0.6)" }}
                >
                  YOUR NUMBER
                </span>
                <span
                  className="text-8xl font-extrabold"
                  style={{
                    background: "linear-gradient(135deg, #ffffff, #4FD1A5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  #7
                </span>
              </div>

              <div
                className="rounded-2xl px-4 py-3 text-center"
                style={{
                  backgroundColor: "rgba(79,209,165,0.1)",
                  border: "1px solid rgba(79,209,165,0.2)",
                }}
              >
                <p
                  className="text-xs font-semibold"
                  style={{ color: colors.mint }}
                >
                  You're next in 2 — head back!
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div
                  className="flex justify-between text-xs"
                  style={{ color: "rgba(168,240,211,0.5)" }}
                >
                  <span>Position</span>
                  <span>2 ahead</span>
                </div>
                <div
                  className="w-full h-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(79,209,165,0.12)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "75%",
                      background: "linear-gradient(90deg, #4FD1A5, #A8F0D3)",
                    }}
                  />
                </div>
                <div className="flex gap-1.5 justify-center pt-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <div
                      key={n}
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                      style={{
                        backgroundColor:
                          n === 7
                            ? colors.mint
                            : n > 5
                              ? "rgba(79,209,165,0.15)"
                              : "rgba(79,209,165,0.08)",
                        color:
                          n === 7
                            ? "#0F2E24"
                            : n > 5
                              ? colors.mint
                              : "rgba(168,240,211,0.3)",
                      }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex justify-between text-xs pt-1"
                style={{ color: "rgba(168,240,211,0.5)" }}
              >
                <span>Est. wait</span>
                <span style={{ color: colors.lightMint, fontWeight: 600 }}>
                  ~4 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t"
        style={{ borderColor: "rgba(79,209,165,0.1)" }}
      >
        <div
          className="max-w-7xl mx-auto px-8 md:px-16 py-16 grid md:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(79,209,165,0.05)" }}
        >
          {[
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.mint}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              ),
              title: "Free QR Queue",
              desc: "No login needed to join. Scan once, you're in.",
            },
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.mint}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              title: "Real-Time Wait Status",
              desc: "Always know your place in line — live updates as queues move.",
            },
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.mint}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              ),
              title: "Premium for Owners",
              desc: "Analytics, promotions, and remote joining — everything to run a smarter queue.",
            },
          ].map((feat) => (
            <div
              key={feat.title}
              className="flex flex-col gap-4 px-8 py-10 transition-all group cursor-default"
              style={{ backgroundColor: colors.background }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#122d23";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.background;
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(79,209,165,0.1)",
                  border: "1px solid rgba(79,209,165,0.18)",
                }}
              >
                {feat.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-white text-base">
                  {feat.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(168,240,211,0.65)" }}
                >
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div
        className="text-center py-8 text-xs"
        style={{ color: "rgba(168,240,211,0.3)" }}
      >
        © 2024 Qeasy. Built for everyone who's ever stood in line.
      </div>
    </div>
  );
}

function AboutPage({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (id: string) => void;
}) {
  return (
    <div
      className="min-h-full"
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <AboutNav onBack={onBack} onNavigate={onNavigate} />

      <main className="max-w-7xl mx-auto px-8 md:px-16 pb-20 space-y-10 md:space-y-14">
        <section
          className="rounded-[16px] border p-8 md:p-12"
          style={{
            backgroundColor: colors.card,
            borderColor: "rgba(79,209,165,0.2)",
          }}
        >
          <div className="max-w-4xl space-y-5">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
              style={{
                backgroundColor: "rgba(79,209,165,0.12)",
                color: colors.mint,
                border: "1px solid rgba(79,209,165,0.25)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: colors.mint }}
              />
              About Qeasy
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              What is Qeasy?
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-4xl"
              style={{ color: colors.body }}
            >
              Qeasy is a free, web-based queue management platform that lets any
              business digitize their walk-in line — no hardware, no app
              download, no login required. Customers scan a QR code posted at
              the business, get their queue number instantly, and check their
              position from anywhere in real time.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-28 space-y-5">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps, no friction"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <InfoCard
                key={step.title}
                index={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        <section id="queue-modes" className="scroll-mt-28 space-y-5">
          <SectionHeading
            eyebrow="Queue modes"
            title="Different service models, same flow"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {queueModes.map((mode) => (
              <div
                key={mode.title}
                className="rounded-[16px] border p-6 md:p-7"
                style={{
                  backgroundColor: colors.card,
                  borderColor: "rgba(79,209,165,0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(79,209,165,0.12)",
                      color: colors.mint,
                      border: "1px solid rgba(79,209,165,0.18)",
                    }}
                  >
                    {mode.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {mode.title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.body }}
                >
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="scroll-mt-28 space-y-5">
          <SectionHeading
            eyebrow="Features"
            title="Free for everyone, premium where it counts"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <FeatureColumn
              title="Free for Everyone"
              items={[
                "No hardware or app needed — works in any browser",
                "QR-based queue joining with no login",
                "Real-time browser queue updates",
                "Business self-registration and QR code generation",
                "Two-way rating system — customers rate businesses, businesses rate customers",
                "Guest joining (no account needed)",
              ]}
            />
            <FeatureColumn
              title="Premium"
              items={[
                "Wait-time analytics dashboard — average wait time, peak hours, busiest days",
                "Promotion notifications sent to followers",
                "Boosted/featured visibility to nearby customers",
                "SMS or phone call notification when it’s nearly their turn, even offline",
                "Remote queue-joining — join a saved business’s queue without going there to scan",
              ]}
              premium
            />
          </div>
        </section>

        <section id="who-for" className="scroll-mt-28 space-y-5">
          <SectionHeading
            eyebrow="Who is it for?"
            title="Built for businesses that live on walk-in traffic"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <div
                key={item}
                className="rounded-[16px] border p-5 flex items-center gap-4"
                style={{
                  backgroundColor: colors.card,
                  borderColor: "rgba(79,209,165,0.18)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: "rgba(79,209,165,0.12)",
                    color: colors.mint,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v18" />
                    <path d="M3 12h18" />
                    <path d="M5.5 5.5l13 13" />
                    <path d="M18.5 5.5l-13 13" />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-snug text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="closing-cta"
          className="scroll-mt-28 rounded-[16px] border p-8 md:p-12"
          style={{
            backgroundColor: colors.card,
            borderColor: "rgba(79,209,165,0.2)",
          }}
        >
          <div className="max-w-4xl space-y-5">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to ditch the paper tickets?
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: colors.body }}
            >
              Join Qeasy for free — no setup fee, no hardware, no hassle.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <ActionButton filled onClick={onBack}>
                Join a Queue
              </ActionButton>
              <ActionButton onClick={onBack}>
                Register Your Business
              </ActionButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function LandingNav({ onNavigateAbout }: { onNavigateAbout: () => void }) {
  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-6 max-w-7xl mx-auto">
      <button
        type="button"
        className="flex items-center gap-3 text-left"
        onClick={onNavigateAbout}
      >
        <img
          src={logoImg}
          alt="Qeasy logo"
          className="w-10 h-10 rounded-xl object-contain"
        />
        <span className="text-white text-xl tracking-tight font-bold">
          Qeasy
        </span>
      </button>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="text-sm font-medium transition-colors"
            style={{ color: colors.lightMint }}
            onClick={onNavigateAbout}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.mint;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.lightMint;
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function AboutNav({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav className="max-w-7xl mx-auto px-8 md:px-16 py-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 min-w-0">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
          style={{ color: colors.background, backgroundColor: colors.mint }}
        >
          <span aria-hidden="true">←</span>
          Back
        </button>
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-3 min-w-0 text-left"
        >
          <img
            src={logoImg}
            alt="Qeasy logo"
            className="w-10 h-10 rounded-xl object-contain"
          />
          <span className="text-white text-xl tracking-tight font-bold">
            Qeasy
          </span>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="text-sm font-medium transition-colors"
            style={{ color: colors.lightMint }}
            onClick={() => onNavigate(item.target)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.mint;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.lightMint;
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
        style={{
          backgroundColor: "rgba(79,209,165,0.12)",
          color: colors.mint,
          border: "1px solid rgba(79,209,165,0.22)",
        }}
      >
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        {title}
      </h2>
    </div>
  );
}

function InfoCard({
  index,
  icon,
  title,
  description,
}: {
  index: number;
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-[16px] border p-6 md:p-7"
      style={{
        backgroundColor: colors.card,
        borderColor: "rgba(79,209,165,0.2)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{
            backgroundColor: "rgba(79,209,165,0.12)",
            color: colors.mint,
            border: "1px solid rgba(79,209,165,0.18)",
          }}
        >
          {icon}
        </div>
        <div className="space-y-3">
          <div
            className="text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: colors.mint }}
          >
            Step {index}
          </div>
          <h3 className="text-lg font-semibold text-white leading-snug">
            {title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: colors.body }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureColumn({
  title,
  items,
  premium = false,
}: {
  title: string;
  items: string[];
  premium?: boolean;
}) {
  return (
    <div
      className="rounded-[16px] border p-6 md:p-8"
      style={{
        backgroundColor: colors.card,
        borderColor: premium
          ? "rgba(168,240,211,0.22)"
          : "rgba(79,209,165,0.2)",
      }}
    >
      <h3 className="text-2xl font-bold text-white mb-5">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed"
            style={{ color: colors.body }}
          >
            <span
              className="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0"
              style={{
                backgroundColor: premium ? colors.lightMint : colors.mint,
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionButton({
  children,
  filled = false,
  onClick,
}: {
  children: React.ReactNode;
  filled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all"
      style={{
        backgroundColor: filled ? colors.mint : "transparent",
        color: filled ? colors.background : "#ffffff",
        border: filled
          ? "1.5px solid rgba(79,209,165,0.35)"
          : "1.5px solid rgba(168,240,211,0.35)",
        boxShadow: filled ? "0 4px 20px rgba(79,209,165,0.25)" : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.borderColor = colors.mint;
        if (filled) {
          e.currentTarget.style.backgroundColor = "#3abf94";
        } else {
          e.currentTarget.style.color = colors.mint;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = filled
          ? "rgba(79,209,165,0.35)"
          : "rgba(168,240,211,0.35)";
        if (filled) {
          e.currentTarget.style.backgroundColor = colors.mint;
        } else {
          e.currentTarget.style.color = "#ffffff";
        }
      }}
    >
      {children}
    </button>
  );
}

export default App;
