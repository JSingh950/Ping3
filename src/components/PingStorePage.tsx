import { useEffect, useState } from "react";

type PingStorePageProps = {
  variant?: "lookbook";
};

const menuGroups = [
  {
    label: "Identity Layer",
    links: [
      ["Profile Tap", "Open contacts, socials, portfolios, and links."],
      ["Portfolio Relay", "Bridge an in-person meeting to a digital trail."],
      ["Native NFC", "Works with modern iPhone and Android devices."],
    ],
  },
  {
    label: "Hardware Layer",
    links: [
      ["Titanium Body", "Ultra-lightweight 2.5g build."],
      ["2mm Profile", "Minimal jewelry form factor."],
      ["Zero Charge", "No battery ritual for the NFC exchange."],
    ],
  },
  {
    label: "Network Layer",
    links: [
      ["Relationship Map", "Software for physical interaction context."],
      ["Follow-Up Loop", "Reduce cold follow-up after live meetings."],
      ["Organic Distribution", "Every tap becomes a live demonstration."],
    ],
  },
];

const markets = [
  {
    number: "01",
    title: "Conferences",
    copy: "A faster exchange for founder rooms, demo days, tech weeks, and investor conversations.",
  },
  {
    number: "02",
    title: "Coworking",
    copy: "Turn repeated physical proximity into a cleaner digital network.",
  },
  {
    number: "03",
    title: "Clubs + Campuses",
    copy: "Make creative, student, and member communities easier to remember and reconnect with.",
  },
];

const specs = [
  ["2.5g", "Ultra-lightweight titanium"],
  ["2mm", "Thin physical profile"],
  ["NFC", "Native iPhone + Android reader"],
  ["0x", "No charging ritual for the tap"],
];

const whyUs = [
  {
    title: "Presence",
    copy: "Ping! starts from the physical moment, not another cold digital request.",
  },
  {
    title: "Clarity",
    copy: "One tap opens the identity, links, portfolio, and contact details you choose to share.",
  },
  {
    title: "Momentum",
    copy: "Every customer interaction creates a visible product demo for the next person in the room.",
  },
];

const team = [
  {
    name: "Vaness “Reece” Gardner",
    title: "Founder & CEO",
    copy: "Former AI specialist at Babson College and Babson alum. Founded The Generator, Babson's AI lab drawing 1,000+ members from MIT, Harvard, venture partners, students, researchers, and SMB owners.",
  },
  {
    name: "Gaspard Seuge",
    title: "Co-Founder & CPO",
    copy: "HEC Paris educated product architect. Former Growth at MWM AI and AI Engineer at Sorare. Built the Ping! web and iOS applications and helped drive 300K+ organic impressions.",
  },
];

function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function ProtocolLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[80] grid place-items-center bg-[#080806] text-[#e9e1cf] transition duration-700 ${
        loaded ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xl px-8">
        <p className="text-xs uppercase tracking-[0.42em] text-[#c8ff5f]">Loading protocols</p>
        <div className="mt-6 h-px overflow-hidden bg-[#e9e1cf]/15">
          <div className="h-full w-2/3 animate-[ping-load_950ms_ease-in-out_infinite] bg-[#c8ff5f]" />
        </div>
        <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#e9e1cf]/45">
          <span>Loading Ping</span>
          <span>cc 2026</span>
        </div>
      </div>
    </div>
  );
}

function DropdownPanel() {
  return (
    <div className="group relative hidden lg:block">
      <button className="text-xs uppercase tracking-[0.18em] text-[#e9e1cf]/70 transition group-hover:text-[#e9e1cf]">
        What Ping does ▾
      </button>
      <div className="pointer-events-none absolute left-1/2 top-full z-40 mt-6 w-[48rem] -translate-x-1/2 border border-[#e9e1cf]/10 bg-[#0d0d09]/95 p-6 opacity-0 shadow-2xl backdrop-blur-xl transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="grid gap-6 md:grid-cols-3">
          {menuGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#c8ff5f]">{group.label}</p>
              <div className="space-y-3">
                {group.links.map(([title, copy]) => (
                  <a className="block border-t border-[#e9e1cf]/10 pt-3" href="#markets" key={title}>
                    <span className="block text-sm text-[#e9e1cf]">□ {title}</span>
                    <span className="mt-1 block text-xs leading-5 text-[#e9e1cf]/45">{copy}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Noise() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] [background-image:linear-gradient(115deg,transparent_0%,rgba(255,255,255,.7)_50%,transparent_100%)] [background-size:3px_3px]"
    />
  );
}

export function PingStorePage(_: PingStorePageProps) {
  useReveal();
  const [activeSpec, setActiveSpec] = useState(0);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#080806] font-sans text-[#e9e1cf] selection:bg-[#c8ff5f] selection:text-black">
      <ProtocolLoader />
      <Noise />
      <style>{`
        @keyframes ping-load { 0% { transform: translateX(-110%); } 100% { transform: translateX(170%); } }
        [data-reveal] { opacity: 0; transform: translateY(42px); transition: opacity 800ms ease, transform 800ms ease; }
        [data-reveal][data-visible="true"] { opacity: 1; transform: translateY(0); }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-[#e9e1cf]/10 bg-[#080806]/88 px-5 backdrop-blur-xl md:px-8">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6">
          <a className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em]" href="#home">
            <span className="grid h-5 w-5 place-items-center border border-[#c8ff5f]/70 text-[10px] text-[#c8ff5f]">P</span>
            Ping
          </a>
          <nav className="hidden items-center gap-9 lg:flex">
            <a className="text-xs uppercase tracking-[0.18em] text-[#e9e1cf]/70 transition hover:text-[#e9e1cf]" href="#home">Home</a>
            <DropdownPanel />
            <a className="text-xs uppercase tracking-[0.18em] text-[#e9e1cf]/70 transition hover:text-[#e9e1cf]" href="#markets">Markets</a>
            <a className="text-xs uppercase tracking-[0.18em] text-[#e9e1cf]/70 transition hover:text-[#e9e1cf]" href="#team">About</a>
          </nav>
          <a
            className="border border-[#e9e1cf]/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#e9e1cf] transition hover:border-[#c8ff5f] hover:text-[#c8ff5f]"
            href="mailto:hello@getping.today?subject=Get%20Ping!"
          >
            Let's connect →
          </a>
        </div>
      </header>

      <section id="home" className="relative z-10 grid min-h-[calc(100svh-80px)] scroll-mt-20 px-5 py-12 md:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(200,255,95,.16),transparent_24rem),radial-gradient(circle_at_82%_70%,rgba(200,255,95,.12),transparent_22rem)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 border border-[#e9e1cf]/5" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[5rem_1fr_18rem]">
          <div className="hidden flex-col justify-end gap-4 pb-16 text-xs text-[#e9e1cf]/45 lg:flex">
            {["01", "02", "03", "04", "05"].map((item) => (
              <a className="transition hover:text-[#c8ff5f]" href="#markets" key={item}>{item}</a>
            ))}
            <span className="text-[#c8ff5f]">#</span>
          </div>

          <div className="flex min-h-[34rem] flex-col justify-center py-12 lg:min-h-[calc(100svh-80px)]">
            <p data-reveal className="text-sm uppercase tracking-[0.36em] text-[#c8ff5f]">Physical identity layer</p>
            <h1 data-reveal className="mt-8 max-w-5xl text-[clamp(4.5rem,12vw,12rem)] font-semibold uppercase leading-[0.78] tracking-[-0.08em] text-[#e9e1cf]">
              Tap.
              <br />
              Connect.
              <br />
              Remember.
            </h1>
            <div data-reveal className="mt-10 grid max-w-4xl gap-6 border-t border-[#e9e1cf]/10 pt-7 md:grid-cols-[1fr_.75fr]">
              <p className="text-2xl leading-tight tracking-[-0.04em] text-[#e9e1cf] md:text-4xl">
                NFC identity hardware for real-world connection.
              </p>
              <p className="text-sm leading-7 text-[#e9e1cf]/55">
                Ping! is a titanium smart ring for identity, portfolios, and links. It is not a health tracker; it is a live bridge from the room to your digital trail.
              </p>
            </div>
            <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="border border-[#c8ff5f] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#c8ff5f] transition hover:bg-[#c8ff5f] hover:text-[#080806]" href="mailto:hello@getping.today?subject=Get%20Ping!">
                Partnerships
              </a>
              <a className="border border-[#e9e1cf]/15 px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#e9e1cf]/70 transition hover:border-[#e9e1cf] hover:text-[#e9e1cf]" href="#markets">
                Learn more
              </a>
            </div>
          </div>

          <div className="hidden items-end pb-16 text-xs uppercase tracking-[0.24em] text-[#e9e1cf]/45 lg:flex">
            Scroll to learn more...
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#e9e1cf]/10 px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1fr]">
          <div data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8ff5f]">About Ping</p>
            <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-[#e9e1cf] md:text-7xl">
              Real-world identity for the AI era.
            </h2>
          </div>
          <div data-reveal className="space-y-7 text-base leading-8 text-[#e9e1cf]/58">
            <p>
              Ping! bridges the physical world and a user's digital trail through a combined hardware and software experience. A single tap transfers a chosen profile: contacts, socials, portfolios, and links.
            </p>
            <p>
              The product was born from creative text-to-image-to-3D AI workflows and built because traditional business cards are dead, while digital interactions feel less human.
            </p>
          </div>
        </div>
      </section>

      <section id="markets" className="relative z-10 scroll-mt-20 px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14 grid gap-8 lg:grid-cols-[.7fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8ff5f]">Markets we operate in</p>
              <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] md:text-7xl">
                Built for rooms where follow-up matters.
              </h2>
            </div>
            <p className="max-w-2xl self-end text-sm leading-7 text-[#e9e1cf]/55">
              Ping! is for high-density human networks: events, campuses, coworking spaces, clubs, and founder ecosystems where a connection should survive the moment.
            </p>
          </div>

          <div className="grid border-y border-[#e9e1cf]/10 md:grid-cols-3">
            {markets.map((market) => (
              <article data-reveal className="border-b border-[#e9e1cf]/10 py-8 md:border-b-0 md:border-r md:px-7 md:last:border-r-0" key={market.number}>
                <p className="text-sm uppercase tracking-[0.24em] text-[#c8ff5f]">[ {market.number} ]</p>
                <h3 className="mt-8 text-3xl font-semibold uppercase tracking-[-0.04em]">{market.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#e9e1cf]/52">{market.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hardware" className="relative z-10 overflow-hidden border-y border-[#e9e1cf]/10 py-20">
        <div className="flex w-[200%] animate-[ticker_24s_linear_infinite] gap-10 whitespace-nowrap text-[clamp(3rem,9vw,9rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-[#e9e1cf]/12">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="flex gap-10" key={index}>
              <span>2.5g titanium</span>
              <span>native NFC</span>
              <span>zero charging footprint</span>
              <span>not a health tracker</span>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div data-reveal className="border border-[#e9e1cf]/10 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8ff5f]">Technical profile</p>
            <p className="mt-10 text-7xl font-semibold uppercase leading-none tracking-[-0.08em] text-[#e9e1cf] md:text-8xl">
              {specs[activeSpec][0]}
            </p>
            <p className="mt-6 text-sm leading-7 text-[#e9e1cf]/55">{specs[activeSpec][1]}</p>
          </div>
          <div className="grid gap-3">
            {specs.map(([value, copy], index) => (
              <button
                className={`grid gap-5 border p-6 text-left transition md:grid-cols-[8rem_1fr] ${
                  activeSpec === index ? "border-[#c8ff5f] bg-[#c8ff5f]/5" : "border-[#e9e1cf]/10 hover:border-[#e9e1cf]/30"
                }`}
                key={value}
                onClick={() => setActiveSpec(index)}
                type="button"
              >
                <span className="text-xl font-semibold uppercase tracking-[-0.04em] text-[#c8ff5f]">{value}</span>
                <span className="text-sm leading-6 text-[#e9e1cf]/55">{copy}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8ff5f]">Why Ping?</p>
            <h2 className="mt-5 max-w-4xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] md:text-7xl">
              Powering the next layer of personal exchange.
            </h2>
          </div>
          <div className="grid gap-px bg-[#e9e1cf]/10 md:grid-cols-3">
            {whyUs.map((item) => (
              <article data-reveal className="bg-[#080806] p-8" key={item.title}>
                <h3 className="text-3xl font-semibold uppercase tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-6 text-sm leading-7 text-[#e9e1cf]/55">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="relative z-10 scroll-mt-20 border-y border-[#e9e1cf]/10 px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8ff5f]">Working at Ping</p>
            <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] md:text-7xl">
              AI-native founders. Physical product operators.
            </h2>
          </div>
          <div className="grid gap-px bg-[#e9e1cf]/10">
            {team.map((person) => (
              <article data-reveal className="bg-[#080806] p-8 md:p-10" key={person.name}>
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8ff5f]">{person.title}</p>
                <h3 className="mt-5 text-4xl font-semibold uppercase leading-none tracking-[-0.05em] md:text-5xl">{person.name}</h3>
                <p className="mt-7 text-sm leading-7 text-[#e9e1cf]/55">{person.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-[#e9e1cf]/10 pt-10 md:grid-cols-[1fr_auto]">
          <p className="max-w-2xl text-sm leading-7 text-[#e9e1cf]/50">
            Ping! enhances real-world identity exchange through NFC-enabled titanium hardware and software designed for follow-up, portfolios, and relationship context.
          </p>
          <div className="text-xs uppercase tracking-[0.24em] text-[#e9e1cf]/45">
            <p>© Ping Ring Inc.</p>
            <a className="mt-3 block text-[#c8ff5f]" href="mailto:hello@getping.today?subject=Get%20Ping!">
              Contact →
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
