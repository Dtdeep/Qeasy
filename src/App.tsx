import logoImg from "@/imports/Logo-1.png";

export default function App() {
  return (
    <div className="min-h-full" style={{ backgroundColor: "#0F2E24", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 max-w-7xl mx-auto">
        {/* Logo + Wordmark */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="QueueEase logo"
            className="w-10 h-10 rounded-xl object-contain"
          />
          <span className="text-white font-700 text-xl tracking-tight" style={{ fontWeight: 700 }}>
            Qeasy
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "For Business"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium transition-colors"
              style={{ color: "#A8F0D3" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#4FD1A5")}
              onMouseLeave={e => (e.currentTarget.style.color = "#A8F0D3")}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="text-sm font-medium px-5 py-2 rounded-full transition-all"
            style={{ color: "#ffffff", border: "1px solid rgba(168,240,211,0.3)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#4FD1A5")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(168,240,211,0.3)")}
          >
            Login
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pt-12 pb-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col gap-7">
          {/* Badge */}
          <div
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
            style={{ backgroundColor: "rgba(79,209,165,0.12)", color: "#4FD1A5", border: "1px solid rgba(79,209,165,0.25)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#4FD1A5" }}
            />
            No app required · Works anywhere
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 40%, #4FD1A5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Skip the wait,<br />not your turn.
          </h1>

          {/* Subheadline */}
          <p className="text-lg leading-relaxed max-w-md" style={{ color: "#A8F0D3", opacity: 0.85 }}>
            Scan a QR code, get your number instantly — no app, no login, no hassle.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all"
              style={{
                backgroundColor: "#4FD1A5",
                color: "#0F2E24",
                boxShadow: "0 4px 20px rgba(79,209,165,0.35)",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#3abf94"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#4FD1A5"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Join a Queue
            </button>
            <button
              className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all"
              style={{
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.3)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#4FD1A5"; e.currentTarget.style.color = "#4FD1A5"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#ffffff"; }}
            >
              For Businesses
            </button>
          </div>

          {/* Social proof */}
          <p className="text-xs" style={{ color: "rgba(168,240,211,0.5)" }}>
            Trusted by 500+ businesses · 2M+ queues managed
          </p>
        </div>

        {/* Right: Phone Mockup */}
        <div className="flex justify-center relative">
          {/* Dashed circle accent */}
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

          {/* Dot accents */}
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
                backgroundColor: "#4FD1A5",
                opacity: dot.opacity,
                top: dot.top,
                left: (dot as any).left,
                right: (dot as any).right,
              }}
            />
          ))}

          {/* Phone shell */}
          <div
            className="phone-float relative z-10 rounded-4xl overflow-hidden"
            style={{
              width: 240,
              height: 490,
              background: "linear-gradient(160deg, #1a3d30 0%, #122b20 100%)",
              border: "1.5px solid rgba(79,209,165,0.15)",
              borderRadius: 40,
              boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(79,209,165,0.08) inset",
            }}
          >
            {/* Notch */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: "rgba(79,209,165,0.15)" }} />
            </div>

            {/* App screen */}
            <div className="px-5 pt-4 flex flex-col gap-5">
              {/* App header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold" style={{ color: "#4FD1A5" }}>Qeasy</span>
                {/* Bell with pulse */}
                <div
                  className="bell-pulse w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(79,209,165,0.15)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4FD1A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
              </div>

              {/* Queue number */}
              <div className="flex flex-col items-center gap-1 py-5">
                <span className="text-xs font-medium" style={{ color: "rgba(168,240,211,0.6)" }}>YOUR NUMBER</span>
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

              {/* Status */}
              <div
                className="rounded-2xl px-4 py-3 text-center"
                style={{ backgroundColor: "rgba(79,209,165,0.1)", border: "1px solid rgba(79,209,165,0.2)" }}
              >
                <p className="text-xs font-semibold" style={{ color: "#4FD1A5" }}>You're next in 2 — head back!</p>
              </div>

              {/* Progress bar */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs" style={{ color: "rgba(168,240,211,0.5)" }}>
                  <span>Position</span>
                  <span>2 ahead</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: "rgba(79,209,165,0.12)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "75%",
                      background: "linear-gradient(90deg, #4FD1A5, #A8F0D3)",
                    }}
                  />
                </div>
                {/* Position pips */}
                <div className="flex gap-1.5 justify-center pt-1">
                  {[1,2,3,4,5,6,7].map(n => (
                    <div
                      key={n}
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                      style={{
                        backgroundColor: n === 7 ? "#4FD1A5" : n > 5 ? "rgba(79,209,165,0.15)" : "rgba(79,209,165,0.08)",
                        color: n === 7 ? "#0F2E24" : n > 5 ? "#4FD1A5" : "rgba(168,240,211,0.3)",
                      }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>

              {/* Est wait */}
              <div className="flex justify-between text-xs pt-1" style={{ color: "rgba(168,240,211,0.5)" }}>
                <span>Est. wait</span>
                <span style={{ color: "#A8F0D3", fontWeight: 600 }}>~4 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(79,209,165,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(79,209,165,0.05)" }}>
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4FD1A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              ),
              title: "Free QR Queue",
              desc: "No login needed to join. Scan once, you're in.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4FD1A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              ),
              title: "Real-Time Wait Status",
              desc: "Always know your place in line — live updates as queues move.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4FD1A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              ),
              title: "Premium for Owners",
              desc: "Analytics, promotions, and remote joining — everything to run a smarter queue.",
            },
          ].map((feat) => (
            <div
              key={feat.title}
              className="flex flex-col gap-4 px-8 py-10 transition-all group cursor-default"
              style={{ backgroundColor: "#0F2E24" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#122d23"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#0F2E24"; }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(79,209,165,0.1)", border: "1px solid rgba(79,209,165,0.18)" }}
              >
                {feat.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-white text-base">{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(168,240,211,0.65)" }}>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <div className="text-center py-8 text-xs" style={{ color: "rgba(168,240,211,0.3)" }}>
        © 2024 Qeasy. Built for everyone who's ever stood in line.
      </div>
    </div>
  );
}
