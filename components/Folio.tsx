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
    title: "Shridurga",
    blurb:
      "A Laravel-built website � backend logic, database-driven features, and a polished presentation site.",
    tags: ["Laravel", "PHP"],
    href: "https://shridurga.org/",
  },
  {
    year: "2025",
    title: "Dashcode",
    blurb:
      "Next.js + Laravel dashboard � REST API integration, dynamic data handling, and responsive SaaS UI.",
    tags: ["Next.js", "Laravel"],
    href: "https://dashcode-react.codeshaper.net/dashboard",
  },
  {
    year: "2025",
    title: "Dashtail",
    blurb:
      "React redesign of a modern dashboard � component-based UI, clean routes, and responsive layout.",
    tags: ["React", "Tailwind"],
    href: "https://dash-tail.vercel.app/en/dashboard",
  },
  {
    year: "2025",
    title: "TOIN Park",
    blurb:
      "A Next.js project � modern frontend architecture with clean, scalable code.",
    tags: ["Next.js"],
    href: "#",
  },
];

const SKILLS = [
  {
    index: "01",
    title: "Frontend",
    copy: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS � translating designs into accurate, responsive, production-ready interfaces.",
  },
  {
    index: "02",
    title: "Framer",
    copy: "No-code / low-code development: CMS, responsive layouts, reusable sections, animations, interactions, and polished template publishing.",
  },
  {
    index: "03",
    title: "Backend",
    copy: "Laravel and PHP � building backend logic, database-driven features, dynamic web applications, and REST API integration.",
  },
  {
    index: "04",
    title: "Tools & workflow",
    copy: "Figma, Git, GitHub, component-based development, and modern frontend workflows with a strong eye for visual hierarchy and spacing.",
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

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal, .section-head")) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
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
        <a className="seal" href="#top" aria-label="Ridoy Mojumder, back to cover">
          RM
        </a>
        <nav className="contents issue-meta" style={{"display": "contents", "flexDirection": "column", "gap": "1rem"}}>
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={current === section.id ? "true" : undefined}
              style={{"textDecoration": current === section.id ? "underline" : "none"}}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <p className="issue-meta">Vol. 04 � Autumn 2026</p>
      </aside>

      <main className="frame">
        {/* ��� Hero ��� */}
        <header className="hero" id="top">
          <div className="hero-rule">
            <span>Frontend � Framer � Laravel</span>
            <span>Dhaka, Bangladesh</span>
            <span>Available for projects</span>
          </div>

          <div className="hero-masthead-wrap">
            <h1 className="masthead">
              Ridoy
              <br />
              <em>Mojumder</em>
            </h1>
          </div>

          <div className="hero-bottom">
            <div>
              <p className="lede">
                Frontend &amp; Framer developer with 1.5+ years building modern,
                responsive, visually polished websites � from Framer templates
                to React, Next.js, and Laravel backend work.
              </p>
              <a className="hero-cta" href="#work">
                View selected work ?
              </a>
            </div>
            <div className="hero-meta">
              <span>Frontend � Framer � Laravel</span>
              <span>B.Sc. CSE, BUBT � CGPA 3.73 / 4.00</span>
              <span>Seeking study in Italy</span>
              <span>hridoymoju463@gmail.com</span>
            </div>
          </div>
        </header>

        {/* ��� About ��� */}
        <section className="section" id="about">
          <div className="section-head reveal">
            <p className="kicker">About the developer</p>
            <p className="folio">pp. 04�05</p>
          </div>
          <div className="about-grid reveal">
            <div className="portrait-frame">
              <div className="portrait" role="img" aria-label="Portrait placeholder" />
            </div>
            <div className="about-copy">
              <p>
                Frontend &amp; Framer developer with 1.5+ years of experience
                building modern, responsive, and visually polished websites.
                Skilled in Framer, React, Next.js, Tailwind CSS, and API
                integration, with growing experience as a Laravel (PHP)
                developer for backend-driven web applications.
              </p>
              <p>
                I translate Figma and design concepts into accurate, responsive,
                production-ready interfaces � reusable UI components, interactive
                sections, animations, and layouts with strong attention to visual
                consistency. Currently completing a B.Sc. in Computer Science &amp;
                Engineering at BUBT, and seeking the opportunity to pursue further
                studies in Italy through a student scholarship programme.
              </p>
              <p>
                Off the keyboard I keep a notebook of interfaces worth revisiting
                and spend time sharpening my backend skills in Laravel. I learn
                fast and take pride in clean, scalable code.
              </p>
              <dl className="stats">
                <div>
                  <dt>13+</dt>
                  <dd>Framer templates</dd>
                </div>
                <div>
                  <dt>1.5+</dt>
                  <dd>Years in practice</dd>
                </div>
                <div>
                  <dt>3</dt>
                  <dd>Stacks, one workflow</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ��� Work ��� */}
        <section className="section" id="work">
          <div className="section-head reveal">
            <p className="kicker">Selected work</p>
            <p className="folio">pp. 08�15</p>
          </div>
          <ul className="work-list reveal">
            {PROJECTS.map((project) => (
              <li key={project.title}>
                <a
                  className="work-item"
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                >
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
              <span>13+</span>
            </div>
            <div className="cover-copy">
              <p className="kicker">Framer templates</p>
              <h3>Thirteen published templates</h3>
              <p>
                A growing catalogue of Framer sites and templates � Elora, Orkit,
                Jared, Kreative Studio, FounderLed, X-Axis, Minibox, Veltrix,
                Metrix, Be-Tec, Fulfilled Industry, Copilot SaaS, and Primex.
                Each ships with CMS, reusable sections, and polished interactions.
              </p>
            </div>
          </article>
        </section>

        {/* ��� Practice ��� */}
        <section className="section" id="practice">
          <div className="section-head reveal">
            <p className="kicker">Practice</p>
            <p className="folio">pp. 18�19</p>
          </div>
          <p className="practice-intro reveal">
            A short specimen of how I work � not a stack list, a set of
            disciplines I will actually take into a project.
          </p>
          <div className="specimen reveal">
            {SKILLS.map((skill) => (
              <article className="skill" key={skill.title} data-index={skill.index}>
                <h3>
                  {skill.title}
                  <span className="mark">�</span>
                </h3>
                <p>{skill.copy}</p>
              </article>
            ))}
          </div>
          <p className="tools reveal">
            Figma � Git � GitHub � REST APIs � Laravel � Tailwind � Pen &amp; paper
          </p>
        </section>

        {/* ��� Contact ��� */}
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
              <p className="contact-info-p">
                Open to freelance frontend, Framer template, and Laravel work.
                If you have a project that needs a clean, responsive interface �
                send a note.
              </p>
              <ul className="channels">
                <li>
                  <a href="mailto:hridoymoju463@gmail.com">
                    <span>Email</span>
                    <span>hridoymoju463@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+8801884225467">
                    <span>Phone</span>
                    <span>+880 1884-225467</span>
                  </a>
                </li>
                <li>
                  <a href="https://shridurga.org" rel="noreferrer" target="_blank">
                    <span>Portfolio</span>
                    <span>shridurga.org</span>
                  </a>
                </li>
                <li>
                  <a href="https://dashcode-react.codeshaper.net/dashboard" rel="noreferrer" target="_blank">
                    <span>Dashboard</span>
                    <span>dashcode-react.codeshaper.net</span>
                  </a>
                </li>
              </ul>
            </div>

            {sent ? (
              <p className="form-note">
                Received � I will reply within a few working days. Thank you for
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
                  <span>Send letter</span>
                </button>
              </form>
            )}
          </div>
          <footer className="colophon">
            <span>� 2026 Ridoy Mojumder</span>
            <span>Dhaka, Bangladesh</span>
            <span>Printed on screen</span>
          </footer>
        </section>
      </main>
    </>
  );
}
