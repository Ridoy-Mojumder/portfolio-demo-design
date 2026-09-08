"use client";

import { FormEvent, useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Cover" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "practice", label: "Practice" },
  { id: "contact", label: "Contact" },
] as const;

const PROJECTS = [
  {
    year: "2026",
    title: "Atelier Ledger",
    blurb:
      "A private-banking product that treats statements as editorial objects — hierarchy, paper grain, and quiet motion instead of dashboard chrome.",
    tags: ["Product", "Type"],
  },
  {
    year: "2025",
    title: "Northroom",
    blurb:
      "Identity and digital system for an architecture studio. A modular grid borrowed from their drawing sheets, applied to the website and proposal decks.",
    tags: ["Brand", "Web"],
  },
  {
    year: "2025",
    title: "Kite Market",
    blurb:
      "Checkout and catalog redesign for an independent grocer. Cut three steps from purchase and made provenance readable at a glance.",
    tags: ["Product", "Research"],
  },
  {
    year: "2024",
    title: "Issue 11",
    blurb:
      "Art direction for a biannual culture journal. Print-first layouts translated to a reading mode that keeps column measure on a phone.",
    tags: ["Editorial", "Art direction"],
  },
];

const SKILLS = [
  {
    title: "Product systems",
    copy: "Flows, information architecture, and component libraries that hold together from first sketch to shipped UI.",
  },
  {
    title: "Brand & type",
    copy: "Wordmarks, type pairing, and voice guidelines. I start with language, then let the visual system follow.",
  },
  {
    title: "Editorial UI",
    copy: "Reading experiences, magazines, and content-heavy products. Measure, rhythm, and the quiet craft of the page.",
  },
  {
    title: "Research",
    copy: "Interviews, journey maps, and critique. I write findings as narratives, not slide decks of sticky notes.",
  },
];

export function Folio() {
  const [current, setCurrent] = useState("top");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (n): n is HTMLElement => Boolean(n),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>

      <aside className="rail" aria-label="Issue navigation">
        <a className="seal" href="#top" aria-label="Alex Chen, back to cover">
          AC
        </a>
        <nav>
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={current === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <p className="issue-meta">Vol. 04 · Autumn 2026</p>
      </aside>

      <main className="frame">
        <header className="hero" id="top">
          <div className="hero-rule">
            <span>San Francisco</span>
            <span>Product · Brand · Editorial</span>
            <span>Available Q4</span>
          </div>
          <h1 className="masthead">
            Alex
            <br />
            <em>Chen</em>
          </h1>
          <div className="hero-bottom">
            <div>
              <p className="lede">
                Product designer who treats interfaces like issues of a magazine:
                a thesis on the cover, disciplined type inside, nothing extra on
                the table.
              </p>
              <a className="hero-cta" href="#work">
                Open selected work →
              </a>
            </div>
            <div className="hero-meta">
              <span>Previously · Northroom, Atelier, Kinfolk contrib.</span>
              <span>Currently · Independent, select retainers</span>
              <span>hello@alexchen.studio</span>
            </div>
          </div>
        </header>

        <section className="section" id="about">
          <div className="section-head">
            <p className="kicker">About the designer</p>
            <p className="folio">pp. 04–05</p>
          </div>
          <div className="about-grid">
            <div className="portrait" role="img" aria-label="Placeholder portrait field" />
            <div className="about-copy">
              <p>
                I spent six years between print studios and product teams, which
                left me with a useful stubbornness: if a screen cannot be read
                like a well-set page, it is not finished.
              </p>
              <p>
                Clients come for product work and stay for the system underneath
                — naming, type, the way a component behaves when it is tired and
                full of real content. I partner with founders and design leads
                who want fewer screens and clearer ones.
              </p>
              <p>
                Off the clock I bind small editions, walk the Embarcadero, and
                keep a notebook of shop signs that get the letter-spacing right.
              </p>
              <dl className="stats">
                <div>
                  <dt>12</dt>
                  <dd>Shipped products</dd>
                </div>
                <div>
                  <dt>6</dt>
                  <dd>Years in practice</dd>
                </div>
                <div>
                  <dt>3</dt>
                  <dd>Studios, one desk</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <p className="kicker">Selected work</p>
            <p className="folio">pp. 08–15</p>
          </div>
          <ul className="work-list">
            {PROJECTS.map((project) => (
              <li key={project.title}>
                <a className="work-item" href="#contact">
                  <span className="work-year">{project.year}</span>
                  <div>
                    <h3 className="work-title">{project.title}</h3>
                    <p className="work-blurb">{project.blurb}</p>
                  </div>
                  <div className="work-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <article className="cover">
            <div className="cover-visual">
              <span>Feature</span>
            </div>
            <div className="cover-copy">
              <p className="kicker">Case in brief</p>
              <h3>Atelier Ledger</h3>
              <p>
                Private clients were abandoning a dense wealth app. We rebuilt
                the monthly statement as a printed folio — one idea per spread,
                figures set in a tabular cut, actions kept in the margin. Time
                to “I understand my month” dropped from twelve minutes to three.
              </p>
            </div>
          </article>
        </section>

        <section className="section" id="practice">
          <div className="section-head">
            <p className="kicker">Practice</p>
            <p className="folio">pp. 18–19</p>
          </div>
          <p className="practice-intro">
            A short specimen of how I work — not a stack list, a set of
            disciplines I will actually take into a room.
          </p>
          <div className="specimen">
            {SKILLS.map((skill) => (
              <article className="skill" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.copy}</p>
              </article>
            ))}
          </div>
          <p className="tools">
            Figma · Design tokens · HTML/CSS · Notion · Pen, paper, binding
            thread
          </p>
        </section>

        <section className="section contact" id="contact">
          <div className="section-head">
            <p className="kicker">Correspondence</p>
            <p className="folio">p. 24</p>
          </div>
          <div className="contact-grid">
            <div>
              <h2>
                Write the
                <br />
                <em>next issue.</em>
              </h2>
              <p>
                I take on two retainers and a handful of short projects each
                year. If you have a product that needs to read as considered,
                send a note.
              </p>
              <ul className="channels">
                <li>
                  <a href="mailto:hello@alexchen.studio">
                    <span>Email</span>
                    <span>hello@alexchen.studio</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.are.na" rel="noreferrer" target="_blank">
                    <span>Are.na</span>
                    <span>alex-chen</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
                    <span>LinkedIn</span>
                    <span>/in/alexchen</span>
                  </a>
                </li>
              </ul>
            </div>

            {sent ? (
              <p className="form-note">
                Received — I’ll reply within a few working days. Thank you for
                writing.
              </p>
            ) : (
              <form onSubmit={onSubmit}>
                <label>
                  Name
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  Project
                  <textarea name="message" required placeholder="What should this issue be about?" />
                </label>
                <button className="send" type="submit">
                  Send letter
                </button>
              </form>
            )}
          </div>
          <footer className="colophon">
            <span>© 2026 Alex Chen</span>
            <span>Set in Bodoni Moda &amp; Source Serif</span>
            <span>Printed on screen</span>
          </footer>
        </section>
      </main>
    </>
  );
}
