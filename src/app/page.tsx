"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  Landmark,
  Star,
  CalendarClock,
  Smartphone,
  History,
  Coins,
  Play,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CopyButton } from "@/components/site/copy-button";
import { Embers } from "@/components/site/embers";
import { StatusChip } from "@/components/site/status-chip";

const SERVER_IP = "69.197.176.168";
const BEDROCK_PORT = "19132";
const TIKTOK_URL = "https://www.tiktok.com/@meltsmp1";

const TICKER_ITEMS = [
  "java + bedrock",
  "survival, actually",
  "hand-built spawn",
  "seasonal events",
  "no pay-to-win",
  "crossplay",
  "come melt with us",
];

const FEATURES = [
  {
    icon: Landmark,
    title: "beacon plaza spawn",
    body: "four gates, market stalls, benches and a gold-ringed beacon in the middle. you'll always know where you are.",
  },
  {
    icon: Star,
    title: "the nova star",
    body: "there's a craftable nether star that calls down an orbital strike and deletes a crater into the map. yes. really.",
  },
  {
    icon: CalendarClock,
    title: "seasonal events",
    body: "a halloween event is in the oven right now. bring a spare pair of pants.",
  },
  {
    icon: Smartphone,
    title: "bedrock? welcome",
    body: "phone, tablet, console — same world, same players, same everything. no second-class citizens.",
  },
  {
    icon: History,
    title: "old client? fine",
    body: "still hanging around on an older java version? the compat stack lets you in anyway.",
  },
  {
    icon: Coins,
    title: "nothing for sale",
    body: "no ranks, no crates, no store. your gear is between you and the creeper.",
  },
];

const CLIPS = [
  { title: "the spawn, block by block", tag: "build" },
  { title: "nova strike, out of nowhere", tag: "strike test" },
  { title: "something for halloween", tag: "teaser" },
];

const FAQS = [
  {
    q: "what version do I need?",
    a: "java edition 1.21.x is the sweet spot. on an older version? you'll still get in — we run a compat stack. bedrock players just need a recent version and the port (19132).",
  },
  {
    q: "can I join from my phone or console?",
    a: "yes — same server, same world. add it in the servers tab: 69.197.176.168, port 19132. on xbox or playstation you'll need the bedrockconnect dns workaround first — it takes two minutes.",
  },
  {
    q: "is there a whitelist?",
    a: "nope. hop in whenever. if you bring a creeper to someone's front door, that's on you.",
  },
  {
    q: "is anything pay-to-win?",
    a: "nothing is for sale at all. no ranks, no keys, no store. everything you get, you earn.",
  },
  {
    q: "who runs this thing?",
    a: "a small crew that plays their own server. the spawn, the plugins, the events — all built in-house.",
  },
];

function SectionHead({
  num,
  label,
  title,
}: {
  num: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs tracking-[0.25em] text-[#FF8A00] uppercase">
        {"//"} {num} — {label}
      </p>
      <h2 className="font-display mt-3 text-3xl leading-tight text-[#EDE6DC] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0A08] text-[#EDE6DC]">
      <Embers />
      <div className="noise-overlay" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-[#2A231C] bg-[#0B0A08]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="pixel-corner-sm block h-7 w-7 bg-[#FF5C1A]">
              <svg viewBox="0 0 16 16" className="h-full w-full" aria-hidden>
                <rect x="7" y="2" width="2" height="2" fill="#FFC53D" />
                <rect x="5" y="4" width="2" height="1" fill="#FF8A00" />
                <rect x="9" y="4" width="2" height="1" fill="#FF8A00" />
                <rect x="5" y="5" width="6" height="2" fill="#FFB020" />
                <rect x="4" y="6" width="8" height="4" fill="#FFC53D" />
                <rect x="5" y="10" width="6" height="2" fill="#FF8A00" />
                <rect x="7" y="12" width="2" height="1" fill="#FF5C1A" />
              </svg>
            </span>
            <span className="font-display text-lg tracking-wide">
              MELT <span className="text-lava">SMP</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 font-mono text-xs tracking-wider text-[#A69C8E] uppercase md:flex">
            <a href="#server" className="transition-colors hover:text-[#FF8A00]">
              the server
            </a>
            <a href="#join" className="transition-colors hover:text-[#FF8A00]">
              how to join
            </a>
            <a href="#world" className="transition-colors hover:text-[#FF8A00]">
              the world
            </a>
            <a href="#clips" className="transition-colors hover:text-[#FF8A00]">
              clips
            </a>
            <a href="#faq" className="transition-colors hover:text-[#FF8A00]">
              faq
            </a>
          </nav>

          <CopyButton value={SERVER_IP} label="copy ip" />
        </div>
      </header>

      <main id="top" className="relative z-10 flex-1">
        <section className="hero-glow relative overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-28">
            <StatusChip />
            <h1 className="wordmark font-display mt-8 text-6xl leading-none tracking-wide sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="text-lava">MELT</span>{" "}
              <span className="text-[#EDE6DC]">SMP</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#A69C8E] sm:text-lg">
              java + bedrock survival. a hand-built spawn, plugins we wrote
              ourselves, and events that actually happen. no pay-to-win, no
              lobby noise — just the game.
            </p>

            <div className="pixel-corner mt-10 flex w-full max-w-xl flex-col items-stretch gap-3 border border-[#2A231C] bg-[#171310] p-4 sm:flex-row sm:items-center">
              <div className="flex-1">
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#A69C8E] uppercase">
                  server address
                </p>
                <p className="mt-1 font-mono text-xl font-bold text-[#FFC53D] sm:text-2xl">
                  {SERVER_IP}
                </p>
              </div>
              <CopyButton value={SERVER_IP} label="copy ip" className="w-full sm:w-auto" />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] tracking-wider text-[#A69C8E] uppercase">
              <span className="pixel-corner-sm border border-[#2A231C] bg-[#171310] px-3 py-1.5">
                java 1.21.x
              </span>
              <span className="pixel-corner-sm border border-[#2A231C] bg-[#171310] px-3 py-1.5">
                bedrock port {BEDROCK_PORT}
              </span>
              <span className="pixel-corner-sm border border-[#2A231C] bg-[#171310] px-3 py-1.5">
                no whitelist
              </span>
              <span className="pixel-corner-sm border border-[#2A231C] bg-[#171310] px-3 py-1.5">
                crossplay
              </span>
            </div>

            <a
              href="#join"
              className="mt-12 font-mono text-xs tracking-[0.25em] text-[#FF8A00] uppercase transition-colors hover:text-[#FFC53D]"
            >
              how to join ↓
            </a>
          </div>
        </section>

        <div className="overflow-hidden border-y border-[#2A231C] bg-[#171310] py-3">
          <div className="ticker-track">
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
                {TICKER_ITEMS.map((item, i) => (
                  <span
                    key={`${half}-${i}`}
                    className="flex items-center font-mono text-xs tracking-[0.25em] text-[#A69C8E] uppercase"
                  >
                    <span className="px-6">{item}</span>
                    <span className="text-[#FF5C1A]">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="server" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHead num="01" label="the server" title="small server. built like it matters." />
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="reveal">
                <p className="text-lg leading-relaxed text-[#A69C8E]">
                  melt smp is what happens when a group of friends gets tired
                  of mega-servers and builds their own instead. everything
                  here is ours — the spawn was placed block by block by build
                  code we wrote, the plugins are written from scratch, and
                  the events are run by people who actually play.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-[#A69C8E]">
                  no ranks you can buy. no /kit gods. no queue to sit in.
                  you spawn on a plaza facing a beacon, and the rest is
                  between you and the world.
                </p>
              </div>
              <div className="reveal grid grid-cols-2 gap-3">
                {[
                  ["151×151", "hand-built spawn"],
                  ["2→1", "platforms, one world"],
                  ["0", "things you can buy"],
                  ["24/7", "up and running"],
                ].map(([stat, label]) => (
                  <div
                    key={label}
                    className="pixel-corner border border-[#2A231C] bg-[#171310] p-5 transition-colors hover:border-[#FF5C1A]"
                  >
                    <p className="font-display text-2xl text-[#FFC53D] sm:text-3xl">{stat}</p>
                    <p className="mt-2 font-mono text-[11px] tracking-wider text-[#A69C8E] uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="scroll-mt-24 border-y border-[#2A231C] bg-[#100D0B]">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHead num="02" label="how to join" title="get in here." />
            <p className="-mt-4 mb-10 max-w-xl text-[#A69C8E]">
              no whitelist, no application, no discord interview. thirty
              seconds and you're in.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="reveal pixel-corner border border-[#2A231C] bg-[#171310] p-6 sm:p-8">
                <p className="font-display text-xl text-[#FF8A00]">java edition</p>
                <ol className="mt-6 space-y-4">
                  {[
                    "open minecraft java — 1.21.x is the sweet spot (older versions work too)",
                    "multiplayer → add server",
                    "paste this into the address bar:",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 text-[#A69C8E]">
                      <span className="pixel-corner-sm h-6 w-6 shrink-0 bg-[#2A231C] text-center font-mono text-xs leading-6 text-[#FF8A00]">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <code className="pixel-corner-sm flex-1 border border-[#3A2E22] bg-[#0B0A08] px-4 py-3 font-mono text-lg font-bold text-[#FFC53D]">
                    {SERVER_IP}
                  </code>
                  <CopyButton value={SERVER_IP} label="copy" />
                </div>
              </div>

              <div className="reveal pixel-corner border border-[#2A231C] bg-[#171310] p-6 sm:p-8">
                <p className="font-display text-xl text-[#FF8A00]">bedrock edition</p>
                <ol className="mt-6 space-y-4">
                  {[
                    "any bedrock edition — phone, tablet, windows, switch",
                    "play → servers → add server",
                    "server address and port:",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 text-[#A69C8E]">
                      <span className="pixel-corner-sm h-6 w-6 shrink-0 bg-[#2A231C] text-center font-mono text-xs leading-6 text-[#FF8A00]">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <code className="pixel-corner-sm flex-1 border border-[#3A2E22] bg-[#0B0A08] px-4 py-3 font-mono text-base font-bold text-[#FFC53D] sm:text-lg">
                    {SERVER_IP} : {BEDROCK_PORT}
                  </code>
                  <CopyButton value={`${SERVER_IP} : ${BEDROCK_PORT}`} label="copy" />
                </div>
                <p className="mt-6 border-l-2 border-[#FF5C1A] pl-4 text-sm leading-relaxed text-[#A69C8E]">
                  on xbox or playstation? you'll need the bedrockconnect dns
                  trick to reach the servers tab — it takes two minutes once
                  it's set up.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="world" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHead num="03" label="the world" title="the spawn, from above." />
            <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
              <div className="reveal relative lg:col-span-3">
                <div className="pixel-corner group relative border border-[#3A2E22] bg-[#171310] p-3">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/spawn-map.png"
                      alt="top-down render of the Melt SMP spawn plaza"
                      width={724}
                      height={724}
                      className="w-full transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                      <span className="pin-pulse block h-3 w-3 bg-[#FF5C1A]" />
                      <span className="pixel-corner-sm mt-1 block bg-[#FF5C1A] px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-[#0B0A08] uppercase">
                        spawn
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between px-1 pb-1">
                    <p className="font-mono text-[10px] tracking-[0.25em] text-[#A69C8E] uppercase">
                      world render — r/0
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.25em] text-[#A69C8E] uppercase">
                      hover to zoom
                    </p>
                  </div>
                </div>
              </div>
              <div className="reveal lg:col-span-2">
                <p className="text-lg leading-relaxed text-[#A69C8E]">
                  the whole thing is ours — beacon plaza in the middle, four
                  cardinal gates, market stalls on the south path, a pond
                  someone definitely fell into, and corner towers lighting
                  the perimeter at night.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-[#A69C8E]">
                  no schematic dumps, no downloaded spawn packs. every block
                  was placed by our own build code and hand-finished after.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-[#A69C8E]">
                  pick a gate, pick a direction, start walking. the world's
                  all yours out there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#2A231C] bg-[#100D0B]">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHead num="04" label="what's inside" title="the good stuff." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="reveal pixel-corner group border border-[#2A231C] bg-[#171310] p-6 transition-all hover:-translate-y-1 hover:border-[#FF5C1A]"
                >
                  <span className="pixel-corner-sm inline-flex h-11 w-11 items-center justify-center bg-[#2A231C] transition-colors group-hover:bg-[#FF5C1A]">
                    <f.icon className="h-5 w-5 text-[#FF8A00] transition-colors group-hover:text-[#0B0A08]" />
                  </span>
                  <h3 className="font-display mt-5 text-lg text-[#EDE6DC]">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A69C8E]">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clips" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHead num="05" label="the clips" title="we post the chaos." />
            <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
              <div className="reveal flex flex-col lg:col-span-2">
                <p className="text-lg leading-relaxed text-[#A69C8E]">
                  highlights, strike tests and event teasers land on tiktok
                  first. if something broke on the server, it's probably on
                  there too.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] tracking-wider text-[#FFC53D] uppercase">
                  <span className="pixel-corner-sm border border-[#3A2E22] bg-[#171310] px-3 py-1.5">
                    25.6K likes
                  </span>
                  <span className="pixel-corner-sm border border-[#3A2E22] bg-[#171310] px-3 py-1.5">
                    1.2K followers
                  </span>
                  <span className="pixel-corner-sm border border-[#3A2E22] bg-[#171310] px-3 py-1.5">
                    @meltsmp1
                  </span>
                </div>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-corner-sm mt-8 self-start bg-[#FF5C1A] px-6 py-3 font-mono text-xs font-bold tracking-wider text-[#0B0A08] uppercase transition-colors hover:bg-[#FFC53D] active:translate-y-px"
                >
                  follow @meltsmp1 ↗
                </a>
              </div>
              <div className="reveal grid gap-4 sm:grid-cols-3 lg:col-span-3">
                {CLIPS.map((clip) => (
                  <a
                    key={clip.title}
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-corner group flex flex-col justify-between border border-[#2A231C] bg-[#171310] p-5 transition-all hover:-translate-y-1 hover:border-[#FF5C1A]"
                  >
                    <span className="pixel-corner-sm inline-flex h-10 w-10 items-center justify-center bg-[#2A231C] transition-colors group-hover:bg-[#FF5C1A]">
                      <Play className="h-4 w-4 fill-[#FF8A00] text-[#FF8A00] transition-colors group-hover:fill-[#0B0A08] group-hover:text-[#0B0A08]" />
                    </span>
                    <div className="mt-16">
                      <p className="font-display text-base leading-snug text-[#EDE6DC]">
                        {clip.title}
                      </p>
                      <p className="mt-2 font-mono text-[10px] tracking-[0.25em] text-[#A69C8E] uppercase">
                        {clip.tag} · watch on tiktok ↗
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 border-t border-[#2A231C] bg-[#100D0B]">
          <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
            <SectionHead num="06" label="questions" title="the faq." />
            <Accordion type="single" collapsible className="reveal">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`q-${i}`}
                  className="border-[#2A231C]"
                >
                  <AccordionTrigger className="font-mono text-sm tracking-wide text-[#EDE6DC] uppercase hover:text-[#FF8A00] hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#A69C8E]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-[#2A231C] bg-[#0B0A08]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div>
              <p className="font-display text-2xl">
                MELT <span className="text-lava">SMP</span>
              </p>
              <p className="mt-3 font-mono text-xs tracking-wider text-[#A69C8E] uppercase">
                meltsmp.com
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#A69C8E] uppercase">
                  site
                </p>
                <ul className="mt-4 space-y-2 font-mono text-xs text-[#A69C8E]">
                  <li><a href="#join" className="hover:text-[#FF8A00]">how to join</a></li>
                  <li><a href="#world" className="hover:text-[#FF8A00]">the world</a></li>
                  <li><a href="#server" className="hover:text-[#FF8A00]">the server</a></li>
                  <li><a href="#faq" className="hover:text-[#FF8A00]">faq</a></li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#A69C8E] uppercase">
                  elsewhere
                </p>
                <ul className="mt-4 space-y-2 font-mono text-xs text-[#A69C8E]">
                  <li>
                    <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8A00]">
                      tiktok ↗
                    </a>
                  </li>
                  <li>
                    <a href="#join" className="hover:text-[#FF8A00]">
                      join the server
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-[#2A231C] pt-6">
            <p className="font-mono text-[11px] leading-relaxed text-[#A69C8E]">
              © 2026 melt smp — not an official minecraft product. not
              approved by or associated with mojang or microsoft.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
