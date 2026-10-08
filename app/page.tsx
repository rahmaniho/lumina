'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Cloud,
  Cpu,
  Download,
  Headphones,
  Laptop,
  Menu,
  Monitor,
  MousePointer2,
  Pause,
  Play,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
  X,
  Zap,
} from 'lucide-react'

const games = [
  { title: 'NEON//DRIFT', genre: 'Racing / PvP', tag: 'Season 04', color: '#00e5ff', rating: 'E10+', players: '2.4M', code: '01' },
  { title: 'VOIDWALKER', genre: 'Action RPG', tag: 'New release', color: '#ff1fb8', rating: 'T', players: '846K', code: '02' },
  { title: 'CHROME//FALL', genre: 'Tactical FPS', tag: 'Competitive', color: '#8b5cf6', rating: 'M', players: '1.1M', code: '03' },
  { title: 'ORBITAL ZERO', genre: 'Co-op Survival', tag: 'Early access', color: '#c6ff00', rating: 'T', players: '492K', code: '04' },
  { title: 'SYNTH//WARS', genre: 'Strategy / RTS', tag: 'Season 02', color: '#ff5c28', rating: 'E10+', players: '728K', code: '05' },
]

const leaders = [
  ['01', 'KAI//NOVA', '18,420', 'KN'],
  ['02', 'MIRA.0', '17,890', 'M0'],
  ['03', 'VOID_PRIME', '16,744', 'VP'],
  ['04', 'GL1TCH', '15,290', 'G1'],
  ['05', 'TESSERACT', '14,882', 'TX'],
]

export default function Page() {
  const [activeGame, setActiveGame] = useState(0)
  const [muted, setMuted] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const game = games[activeGame]
  const next = () => setActiveGame((activeGame + 1) % games.length)
  const previous = () => setActiveGame((activeGame - 1 + games.length) % games.length)
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <main className="neon-page">
      <div className="grain" aria-hidden="true" />
      <header className={`topbar ${scrollY > 70 ? 'topbar-scrolled' : ''}`}>
        <a href="#top" className="brand" aria-label="Arcadia home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>ARCADIA<span className="brand-slash">/</span>OS</span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {['Showcase', 'Community', 'Roadmap', 'Esports', 'Pricing'].map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="nav-actions">
          <span className="live-ticker"><i /> 48,291 ONLINE</span>
          <button className="icon-button" aria-label={muted ? 'Unmute sound' : 'Mute sound'} onClick={() => setMuted(!muted)}>{muted ? <VolumeX /> : <Volume2 />}</button>
          <a href="#deploy" className="button button-cyan nav-cta">Initialize <ArrowRight /></a>
          <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-fog fog-one" aria-hidden="true" />
        <div className="hero-fog fog-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> PLATFORM ONLINE / 2026.04</p>
          <h1>WHERE<br /><em>LEGENDS</em><br />COMPILE<span className="cyan-dot">.</span></h1>
          <p className="hero-description">A living arcade for the next generation. Discover worlds built to be broken, mastered, and remembered.</p>
          <div className="hero-actions"><a className="button button-cyan" href="#deploy"><Download /> Download free</a><a className="button button-ghost" href="#showcase"><CirclePlay /> Watch trailer <span className="button-arrow">↗</span></a></div>
          <div className="platforms"><span>AVAILABLE ON</span><Laptop /> <span>WINDOWS</span><span className="platform-sep">/</span><Monitor /> <span>PS5</span><span className="platform-sep">/</span><Cloud /> <span>CLOUD</span></div>
        </div>
        <div className="artifact-wrap" aria-label="A rotating holographic artifact. Select to activate." role="img">
          <div className="artifact-glow" />
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
          <div className="artifact"><div className="artifact-core"><span className="core-line line-a" /><span className="core-line line-b" /><span className="core-line line-c" /></div></div>
          <div className="artifact-label"><span>ARTIFACT_07</span><small>SYNCING / 98.4%</small></div>
          <div className="crosshair crosshair-one" /><div className="crosshair crosshair-two" />
        </div>
        <div className="hero-side-note"><span>LAT 37°46&apos;29&quot; N</span><span>LON 122°25&apos;09&quot; W</span><span className="vertical-note">SIGNAL DETECTED</span></div>
        <div className="stats-strip"><div><strong>48,291</strong><span>PLAYERS ONLINE</span></div><div><strong>12,804</strong><span>MATCHES TODAY</span></div><div><strong>06</strong><span>TOURNAMENTS LIVE</span></div><div><strong>99.98%</strong><span>UPTIME</span></div></div>
        <a className="scroll-cue" href="#showcase"><span>SCROLL TO DESCEND</span><ArrowDownRight /></a>
      </section>

      <section className="showcase section-pad" id="showcase">
        <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> 02 / THE ARSENAL</p><h2>CHOOSE YOUR<br /><em>OBSESSION.</em></h2></div><p className="section-intro">No filler. No safe bets. Enter the games that keep the signal alive long after the screen goes dark.</p></div>
        <div className="carousel-shell" style={{ '--accent': game.color } as React.CSSProperties}>
          <div className="carousel-controls"><span className="carousel-count">0{game.code} <i>/</i> 0{games.length}</span><div className="carousel-arrows"><button aria-label="Previous game" onClick={previous}><ChevronLeft /></button><button aria-label="Next game" onClick={next}><ChevronRight /></button></div></div>
          <div className="game-stage">
            {games.map((item, index) => { const offset = (index - activeGame + games.length) % games.length; return <button key={item.title} className={`game-card card-${offset} ${index === activeGame ? 'game-card-active' : ''}`} onClick={() => setActiveGame(index)} aria-label={`Select ${item.title}`}><div className="card-image" style={{ '--card-color': item.color } as React.CSSProperties}><div className="card-no">//{item.code}</div><div className="card-symbol"><span /><span /><span /></div><div className="card-scanline" /></div><div className="game-card-meta"><span>{item.genre}</span><strong>{item.title}</strong></div></button> })}
            <div className="game-detail"><p className="detail-tag"><span /> {game.tag}</p><h3>{game.title}</h3><div className="detail-row"><span>{game.genre}</span><span>RATING {game.rating}</span><span><i /> {game.players} PLAYERS</span></div><p>Every shortcut has a cost. Every skyline hides a route. Build your loadout, find your crew, and make the grid remember your name.</p><div className="detail-actions"><button className="button button-cyan"><Zap /> Enter game</button><button className="wishlist"><Sparkles /> Add to wishlist</button></div></div>
          </div>
          <div className="carousel-progress">{games.map((item, index) => <button key={item.code} className={index === activeGame ? 'progress-active' : ''} onClick={() => setActiveGame(index)} aria-label={`Go to slide ${index + 1}`}><span /></button>)}</div>
        </div>
      </section>

      <section className="collective section-pad" id="community">
        <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> 03 / THE COLLECTIVE</p><h2>THE GRID<br /><em>IS ALIVE.</em></h2></div><p className="section-intro">You are not playing alone. The signal gets stronger with every rival, squad, and late-night run.</p></div>
        <div className="community-grid"><div className="panel live-panel"><div className="panel-top"><span>NETWORK STATUS</span><span className="status-live"><i /> LIVE</span></div><div className="big-stat">48,291</div><p>players connected right now</p><div className="waveform"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="panel-bottom"><span>PEAK: 51,904</span><span>REGION: GLOBAL</span></div></div><div className="panel discord-panel"><div className="discord-orb"><Radio /></div><div><p className="panel-kicker">FIND YOUR FREQUENCY</p><h3>THE ARC<span>◆</span>NET</h3><p>24,804 operators online across 118 channels.</p></div><a href="#community" className="button button-magenta">Join the collective <ArrowRight /></a></div><div className="panel leaderboard"><div className="panel-top"><span>WEEKLY RANKINGS</span><Trophy /></div>{leaders.map(([rank, name, score, initials]) => <div className="leader-row" key={name}><span className={`rank rank-${rank}`}>{rank}</span><span className="avatar">{initials}</span><strong>{name}</strong><span className="score">{score} <small>XP</small></span></div>)}<button className="text-link">View full rankings <ArrowRight /></button></div></div>
      </section>

      <section className="deploy section-pad" id="deploy"><div className="deploy-panel"><div className="deploy-copy"><p className="eyebrow"><span className="eyebrow-line" /> 04 / DEPLOY</p><h2>YOUR NEXT<br /><em>WORLD AWAITS.</em></h2><p>Download the launcher. Assemble your crew. The first move is yours.</p><div className="download-actions"><button className="button button-cyan"><Download /> Download for Windows</button><button className="other-platforms">Other platforms <ChevronRight /></button></div><div className="trust-row"><span><ShieldCheck /> Virus scanned</span><span><Cpu /> 84.2 MB</span><span><Zap /> No card required</span></div></div><div className="qr-frame"><div className="qr-code" aria-label="QR code for mobile download">{Array.from({ length: 81 }).map((_, i) => <i key={i} style={{ opacity: (i * 17) % 7 > 2 ? 1 : 0 }} />)}</div><p>SCAN TO SYNC<br /><span>MOBILE HANDOFF / 01:42</span></p></div></div></section>

      <section className="roadmap section-pad" id="roadmap"><div className="roadmap-heading"><p className="eyebrow"><span className="eyebrow-line" /> 05 / ROADMAP</p><h2>THE SIGNAL<br /><em>CONTINUES.</em></h2></div><div className="timeline"><div className="timeline-beam" /><div className="timeline-item done"><span className="timeline-node">01</span><p>SEASON 01 / ONLINE</p><strong>THE AWAKENING</strong><small>New world. New rules. The first breach is complete.</small></div><div className="timeline-item active"><span className="timeline-node">02</span><p>SEASON 02 / NOW</p><strong>NEON ASCENSION</strong><small>Five new arenas. Ranked duels. The city looks different from the top.</small></div><div className="timeline-item"><span className="timeline-node">03</span><p>SEASON 03 / Q4 2026</p><strong>THE DEEP SIGNAL</strong><small>Something is calling from below the grid. Bring a light.</small></div></div></section>

      <section className="signup section-pad" id="pricing"><div className="signup-inner"><div><p className="eyebrow"><span className="eyebrow-line" /> ACCESS IS FREE</p><h2>STAY IN<br /><em>THE LOOP.</em></h2></div><div className="signup-form">{joined ? <div className="success-message"><span>✓</span><div><strong>Signal received.</strong><p>We&apos;ll find you when the next world opens.</p></div></div> : <form onSubmit={(event) => { event.preventDefault(); if (email.includes('@')) setJoined(true) }}><label htmlFor="email">Get drop alerts, tournament invites, and classified transmissions.</label><div className="input-row"><input id="email" type="email" required placeholder="operator@domain.com" value={email} onChange={(event) => setEmail(event.target.value)} /><button className="button button-cyan" type="submit" aria-label="Join the mailing list"><Send /></button></div><p className="form-note">NO NOISE. UNSUBSCRIBE ANYTIME.</p></form>}</div></div></section>

      <footer className="footer"><div className="footer-top"><a href="#top" className="brand"><span className="brand-mark"><span /><span /><span /></span><span>ARCADIA<span className="brand-slash">/</span>OS</span></a><p>THE NEXT WORLD IS ALREADY RUNNING.</p><div className="footer-status"><i /> ALL SYSTEMS OPERATIONAL</div></div><div className="footer-links"><div><span>PLATFORM</span><a href="#deploy">Download</a><a href="#showcase">Showcase</a><a href="#roadmap">Roadmap</a></div><div><span>COMMUNITY</span><a href="#community">The ArcNet</a><a href="#community">Rankings</a><a href="#community">Esports</a></div><div><span>COMPANY</span><a href="#top">About Arcadia</a><a href="#top">Careers</a><a href="#top">Contact</a></div><div><span>LEGAL</span><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Cookies</a></div></div><div className="footer-bottom"><span>© {year} ARCADIA SYSTEMS / BUILD 0.9.42</span><span>MADE FOR THE CURIOUS <MousePointer2 /></span><span>EN / US</span></div></footer>
    </main>
  )
}
