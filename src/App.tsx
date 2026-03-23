import { startTransition, useState } from "react"
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MoonStar,
  Phone,
  Sparkles,
  SunMedium,
  Workflow,
  Zap,
} from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

const profile = {
  name: "Peddina Abhinash",
  role: "Frontend Developer",
  headline:
    "Frontend developer focused on clean React products and scalable UI delivery.",
  summary:
    "I build fast, scalable, and user-friendly web applications using React and TypeScript, focusing on performance and clean UI architecture.",
  location: "Srikakulam, India",
  phone: "+91 6305865365",
  email: "peddinaabhinash999@gmail.com",
  linkedin: "https://www.linkedin.com/in/peddinaabhinash",
  github: "https://github.com/peddinaabhinash999",
  photo: "/Abhiprofilepic.png",
  resume: "/Abhinash_Peddina_Frontend_Developer_React.pdf",
  resumeFileName: "Abhinash_Peddina_Frontend_Developer_React.pdf",
}

const stats = [
  { label: "Experience", value: "1+ Years" },
  { label: "Core Stack", value: "React + TS" },
  { label: "API Work", value: "REST + GraphQL" },
  { label: "Product Areas", value: "Healthtech + AI" },
]

const strengths = [
  {
    title: "Reusable UI systems",
    text: "I turn product screens into maintainable React components instead of one-off pages.",
    icon: Layers3,
  },
  {
    title: "API-connected workflows",
    text: "I work comfortably with dynamic product data and real application state.",
    icon: Workflow,
  },
  {
    title: "Faster delivery with AI tools",
    text: "I use Cursor AI, Antigravity AI, ChatGPT, and Copilot to speed up quality implementation.",
    icon: Bot,
  },
]

const experience = {
  company: "Citimedia Global Solutions",
  role: "Frontend Developer",
  period: "May 2025 - Present",
  bullets: [
    "Develop responsive UI screens with React.js and TypeScript.",
    "Build reusable components and improve frontend structure for faster iteration.",
    "Integrate REST APIs and GraphQL APIs for product workflows.",
    "Collaborate with backend developers, QA engineers, and designers in Agile delivery.",
  ],
}

const projects = [
  {
    name: "BrainFx",
    domain: "Healthtech Product",
    summary:
      "Worked on cognitive assessment flows where clarity, consistency, and dynamic data handling matter.",
    points: [
      "Built interactive React screens for guided assessment experiences.",
      "Connected APIs to drive dynamic evaluation data and workflow states.",
      "Applied reusable UI patterns to support future product screens.",
    ],
    stack: ["React.js", "TypeScript", "REST APIs", "GraphQL"],
  },
  {
    name: "RecruiterAI",
    domain: "AI Interview Platform",
    summary:
      "Built frontend experiences for an AI-led interview product with dashboard, avatar, and recording workflows.",
    points: [
      "Developed dashboard interfaces with clear content hierarchy.",
      "Worked on avatar interaction and candidate video recording UI.",
      "Focused on user confidence and smooth interview flow transitions.",
    ],
    stack: ["React.js", "TypeScript", "Tailwind CSS", "AI-assisted workflow"],
  },
]

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "UI Libraries",
    items: ["Tailwind CSS", "Material UI", "Shadcn UI", "Responsive Design"],
  },
  {
    title: "Integration",
    items: ["REST APIs", "GraphQL", "FastAPI", "React Hooks"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Cursor AI",
      "GitHub Copilot",
    ],
  },
]

const education = [
  {
    degree: "MCA",
    place: "BVC College of Engineering",
    meta: "CGPA: 7.5",
  },
  {
    degree: "B.Sc. Computers",
    place: "SK Degree College",
    meta: "Undergraduate degree",
  },
]

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="section-label">{label}</p>
      <h2 className="mt-4 text-3xl font-[family:var(--font-display)] font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  )
}

function App() {
  const { theme, setTheme } = useTheme()
  const [imageFailed, setImageFailed] = useState(false)
  const isDark = theme === "dark"

  const toggleTheme = () => {
    startTransition(() => {
      setTheme(isDark ? "light" : "dark")
    })
  }

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="min-w-0">
            <p className="text-sm font-semibold tracking-[0.26em] text-muted-foreground uppercase">
              Peddina Abhinash
            </p>
            <p className="text-sm text-foreground/80">Frontend Developer</p>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#experience" className="hover:text-foreground">
              Experience
            </a>
            <a href="#projects" className="hover:text-foreground">
              Projects
            </a>
            <a href="#skills" className="hover:text-foreground">
              Skills
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={toggleTheme}
            >
              {isDark ? (
                <SunMedium className="size-4" aria-hidden="true" />
              ) : (
                <MoonStar className="size-4" aria-hidden="true" />
              )}
            </Button>
            <Button asChild size="sm" className="rounded-full px-4">
              <a href={`mailto:${profile.email}`}>Contact</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-border/70">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/6 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="size-4" aria-hidden="true" />
                Modern frontend portfolio
              </div>

              <div className="space-y-5">
                <p className="text-sm font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                  React.js + TypeScript Developer
                </p>
                <h1 className="max-w-4xl text-5xl leading-none font-[family:var(--font-display)] font-semibold tracking-tight text-balance sm:text-6xl lg:text-5xl">
                  Frontend developer focused on clean{" "}
                  <span className="headline-highlight">React</span> products and{" "}
                  <span className="headline-highlight">scalable UI</span>{" "}
                  delivery.
                </h1>
                <p className="max-w-[650px] text-lg leading-8 text-muted-foreground sm:text-xl">
                  {profile.summary}
                </p>
                <p className="max-w-[650px] text-base leading-7 font-medium text-foreground/82 sm:text-lg">
                  I specialize in building scalable UI systems and API-driven
                  frontend applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="meta-pill">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                  {profile.location}
                </span>
                <span className="meta-pill">
                  <Zap className="size-4 text-primary" aria-hidden="true" />
                  Open to Frontend Opportunities
                </span>
                <span className="meta-pill">
                  <BriefcaseBusiness
                    className="size-4 text-primary"
                    aria-hidden="true"
                  />
                  Frontend Developer @ Citimedia Global Solutions
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="button-lift rounded-full px-5"
                >
                  <a href={`mailto:${profile.email}`}>
                    Contact me
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="button-lift rounded-full px-5"
                >
                  <a href={profile.resume} download={profile.resumeFileName}>
                    Download Resume
                    <Download className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="button-lift rounded-full px-5"
                >
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="button-lift rounded-full px-5"
                >
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub
                    <Github className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {stats.map((item) => (
                  <div key={item.label} className="stat-card">
                    <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                      {item.label}
                    </p>
                    <p className="mt-3 text-xl font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="profile-shell">
              <div className="profile-photo image-hover">
                {!imageFailed ? (
                  <img
                    src={profile.photo}
                    alt="Peddina Abhinash profile"
                    className="h-full w-full object-cover"
                    onError={() => {
                      setImageFailed(true)
                    }}
                  />
                ) : (
                  <div className="profile-fallback">
                    <span>PA</span>
                  </div>
                )}
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-2xl font-semibold text-foreground">
                    {profile.name}
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">
                    Frontend developer who enjoys shipping polished user
                    interfaces and dependable product workflows.
                  </p>
                </div>

                <div className="space-y-3">
                  <a className="profile-link" href={`mailto:${profile.email}`}>
                    <Mail className="size-4" aria-hidden="true" />
                    <span>{profile.email}</span>
                  </a>
                  <a className="profile-link" href={`tel:${profile.phone}`}>
                    <Phone className="size-4" aria-hidden="true" />
                    <span>{profile.phone}</span>
                  </a>
                  <a
                    className="profile-link"
                    href={profile.resume}
                    download={profile.resumeFileName}
                  >
                    <Download className="size-4" aria-hidden="true" />
                    <span>Download resume</span>
                  </a>
                  <a
                    className="profile-link"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="size-4" aria-hidden="true" />
                    <span>LinkedIn profile</span>
                  </a>
                  <a
                    className="profile-link"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="size-4" aria-hidden="true" />
                    <span>GitHub profile</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <SectionIntro
            label="Strengths"
            title="Built for teams that want clean frontend execution"
            description="This design keeps the content straightforward and recruiter-friendly while showing the parts that matter most: UI quality, API work, and product collaboration."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {strengths.map(({ title, text, icon: Icon }) => (
              <article key={title} className="feature-card">
                <div className="feature-icon">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="border-y border-border/70 bg-secondary/40"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-18">
            <SectionIntro
              label="Experience"
              title="Production work, not just portfolio demos"
              description="Your current role is shown as the strongest trust signal. It makes the portfolio feel grounded in real team work."
            />

            <div className="timeline-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="section-label">{experience.company}</p>
                  <h3 className="mt-3 text-3xl font-[family:var(--font-display)] font-semibold tracking-tight">
                    {experience.role}
                  </h3>
                </div>
                <span className="rounded-full border border-border/80 px-4 py-2 text-sm text-muted-foreground">
                  {experience.period}
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {experience.bullets.map((item) => (
                  <div key={item} className="timeline-point">
                    <span className="mt-2 size-2 rounded-full bg-primary" />
                    <p className="text-sm leading-7 text-foreground/88">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18"
        >
          <SectionIntro
            label="Projects"
            title="Work framed the way recruiters like to review it"
            description="Each project is presented with context, frontend contribution, and stack so the portfolio reads clearly in a quick scan."
          />

          <div className="mt-10 space-y-6">
            {projects.map((project, index) => (
              <article key={project.name} className="project-card">
                <div className="project-index">0{index + 1}</div>

                <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
                  <div>
                    <p className="section-label">{project.domain}</p>
                    <h3 className="mt-3 text-3xl font-[family:var(--font-display)] font-semibold tracking-tight sm:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    <div className="space-y-3">
                      {project.points.map((point) => (
                        <div key={point} className="project-point">
                          <Code2
                            className="mt-1 size-4 text-primary"
                            aria-hidden="true"
                          />
                          <p className="text-sm leading-7 text-foreground/88">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="stack-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="border-y border-border/70 bg-secondary/40"
        >
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
            <SectionIntro
              label="Skills"
              title="A stack aligned with modern frontend hiring"
              description="The goal here is clarity. Everything is grouped so hiring managers can identify your fit within seconds."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <article key={group.title} className="skill-card">
                  <h3 className="text-2xl font-[family:var(--font-display)] font-semibold">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="stack-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <article className="detail-card">
              <div className="flex items-center gap-3">
                <div className="feature-icon">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="section-label">Education</p>
                  <h2 className="mt-2 text-3xl font-[family:var(--font-display)] font-semibold tracking-tight">
                    Academic background
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {education.map((item) => (
                  <div key={item.degree} className="mini-card">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.place}
                    </p>
                    <p className="mt-3 text-sm text-foreground/78">
                      {item.meta}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="detail-card">
              <p className="section-label">Certification</p>
              <h2 className="mt-3 text-3xl font-[family:var(--font-display)] font-semibold tracking-tight">
                Continued learning
              </h2>

              <div className="mini-card mt-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Python for Beginners
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Code Tantra
                </p>
              </div>

              <div className="callout-card mt-6">
                This portfolio is structured for today&apos;s hiring flow:
                strong headline, real experience, project context, clear skills,
                and visible contact actions.
              </div>
            </article>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20"
        >
          <div className="contact-band">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-[family:var(--font-display)] font-semibold tracking-tight text-balance sm:text-5xl">
                Let&apos;s connect for frontend opportunities.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                If you&apos;re hiring for React.js, TypeScript, or frontend
                product roles, I&apos;d be happy to discuss how I can support
                your team.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Button
                asChild
                size="lg"
                className="button-lift h-12 rounded-full px-5"
              >
                <a href={`mailto:${profile.email}`}>
                  Email
                  <Mail className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="button-lift h-12 rounded-full px-5"
              >
                <a href={`tel:${profile.phone}`}>
                  Call
                  <Phone className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="button-lift h-12 rounded-full px-5"
              >
                <a href={profile.resume} download={profile.resumeFileName}>
                  Download Resume
                  <Download className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="button-lift h-12 rounded-full px-5"
              >
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                  <Linkedin className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
