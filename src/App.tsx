import { useEffect, useState } from "react"
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Tilt } from "@/components/tilt"
import { useTheme } from "@/components/theme-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import AnimatedBackground from "./components/animation/AnimatedBackground"

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
  { label: "Experience", value: "1.5 Years" },
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

const experience = [
  {
    company: "Citimedia Global Solutions",
    role: "Frontend Developer",
    period: "May 2025 - Present",
    tag: "Full-time",
    bullets: [
      "Improved UI responsiveness by 30% by optimizing React.js and TypeScript rendering workflows across internal applications.",
      "Engineered 15+ reusable UI components with Tailwind CSS, Material UI, and Shadcn UI, reducing frontend development time by 20%.",
      "Integrated 8+ REST and GraphQL APIs across 2 internal products, improving frontend data consistency by 40%.",
      "Improved deployment consistency and scalability using Docker, Google Cloud Run, and CI/CD workflows.",
      "Partnered with designers and QA teams in Agile sprints to deliver accessible, WCAG-friendly, production-ready features.",
    ],
  },
  {
    company: "Citimedia Global Solutions",
    role: "Frontend Developer Intern",
    period: "Nov 2024 - Apr 2025",
    tag: "Internship",
    bullets: [
      "Built responsive frontend interfaces with React.js, TypeScript, and Tailwind CSS focused on clean UX.",
      "Created 8+ reusable UI components and integrated REST APIs to improve consistency and stability across pages.",
      "Participated in debugging, UI testing, and Agile sprint discussions alongside the product team.",
    ],
  },
]

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
  {
    name: "Interactive Learning Activities",
    domain: "EdTech Experiences",
    summary:
      "Built interactive assessment workflows and learning games with smooth cross-browser and touch support.",
    points: [
      "Developed reusable learning activity structures with progress tracking.",
      "Implemented drag-and-drop and touch interactions for mobile and desktop.",
      "Optimized UI behavior for speed, engagement, and cross-browser compatibility.",
    ],
    stack: ["React.js", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
]

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js (basics)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "jQuery",
    ],
  },
  {
    title: "UI Libraries",
    items: [
      "Tailwind CSS",
      "Material UI",
      "Shadcn UI",
      "Responsive Design",
      "WCAG Accessibility",
    ],
  },
  {
    title: "APIs & State",
    items: [
      "REST APIs",
      "GraphQL (Apollo)",
      "Axios",
      "Fetch API",
      "React Hooks",
      "Redux",
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Google Cloud Run",
      "Vite",
      "Webpack",
      "GitHub Actions",
      "CI/CD",
    ],
  },
]

const education = [
  {
    degree: "MCA",
    place: "BVC College of Engineering",
    meta: "2022 - 2024 · Web Technologies, Data Structures, DBMS",
  },
  {
    degree: "B.Sc. Computers",
    place: "SK Degree College",
    meta: "2019 - 2022 · Undergraduate degree",
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
    <Reveal className="max-w-2xl" from="up">
      <p className="section-label">{label}</p>
      <h2 className="mt-4 text-3xl font-[family:var(--font-display)] font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </Reveal>
  )
}

function App() {
  const { setTheme } = useTheme()
  const [imageFailed, setImageFailed] = useState(false)

  // This portfolio is dark-only — lock the theme regardless of stored value.
  useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  return (
    <div className="min-h-svh">
            <AnimatedBackground />
      <header className="sticky top-3 z-40 px-3 pt-3 sm:top-4 sm:px-6 sm:pt-4 lg:px-8">
        <div className="nav-pill mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full py-2.5 pr-2.5 pl-5 sm:pl-6">
          <div className="flex items-center gap-6 lg:gap-9">
            <a href="#top" className="flex min-w-0 items-center gap-2.5">
              <span
                className="size-2.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
                  Peddina Abhinash
                </span>
                <span className="hidden text-xs text-muted-foreground sm:block">
                  Frontend Developer
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-7 text-sm md:flex">
              <a href="#experience" className="nav-link">
                Experience
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="button-lift rounded-full px-5"
            >
              <a href={`mailto:${profile.email}`}>Contact</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-border/70">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
            <Reveal className="space-y-8" from="left">
              <Badge
                variant="outline"
                className="h-auto gap-2 border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary"
              >
                <Sparkles className="size-4 float-soft" aria-hidden="true" />
                Modern frontend portfolio
              </Badge>

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
                {stats.map((item, index) => (
                  <Reveal key={item.label} delay={index * 90} from="up">
                    <Tilt className="h-full">
                      <div className="stat-card h-full">
                        <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                          {item.label}
                        </p>
                        <p className="mt-3 text-xl font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </Tilt>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal as="aside" className="profile-shell" from="right">
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
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <SectionIntro
            label="Strengths"
            title="Built for teams that want clean frontend execution"
            description="This design keeps the content straightforward and recruiter-friendly while showing the parts that matter most: UI quality, API work, and product collaboration."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {strengths.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 110} from="up">
                <Tilt className="h-full">
                  <Card className="feature-card h-full gap-0 rounded-[1.75rem] p-6 ring-0">
                    <div className="feature-icon">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {text}
                    </p>
                  </Card>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="border-y border-border/70 bg-secondary/40"
        >
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
            <SectionIntro
              label="Experience"
              title="Production work, not just portfolio demos"
              description="1.5 years contributing to real products — scalable UI systems, REST and GraphQL integrations, and team collaboration in Agile delivery."
            />

            <div className="mt-10 space-y-6">
              {experience.map((role, index) => (
                <Reveal
                  key={role.role}
                  className="timeline-card"
                  delay={index * 120}
                  from="up"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                    <div className="lg:w-72 lg:shrink-0">
                      <div className="flex items-center gap-3">
                        <span className="feature-icon">
                          <BriefcaseBusiness
                            className="size-5"
                            aria-hidden="true"
                          />
                        </span>
                        <Badge
                          variant="outline"
                          className="border-primary/25 bg-primary/8 text-primary"
                        >
                          {role.tag}
                        </Badge>
                      </div>
                      <h3 className="mt-5 text-2xl font-[family:var(--font-display)] font-semibold tracking-tight sm:text-3xl">
                        {role.role}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-foreground/80">
                        {role.company}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {role.period}
                      </p>
                    </div>

                    <Separator
                      orientation="vertical"
                      className="hidden bg-border/70 lg:block lg:h-auto lg:self-stretch"
                    />

                    <div className="grid flex-1 gap-3 sm:grid-cols-2">
                      {role.bullets.map((item) => (
                        <div key={item} className="timeline-point">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <p className="text-sm leading-7 text-foreground/88">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18"
        >
          <SectionIntro
            label="Projects"
            title="Projects built and presented for real-world evaluation"
            description="Each project highlights problem context, frontend contributions, and tech stack, enabling fast and clear assessment."
          />

          <div className="mt-10 space-y-6">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 90} from="up">
                <Tilt max={4}>
                  <article className="project-card">
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
                        <Badge
                          key={item}
                          variant="secondary"
                          className="rounded-full px-3 py-1 text-[11px] font-medium tracking-wide text-secondary-foreground/80 uppercase"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
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
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} delay={(index % 2) * 110} from="up">
                  <Tilt max={6} className="h-full">
                    <article className="skill-card h-full">
                      <h3 className="text-2xl font-[family:var(--font-display)] font-semibold">
                        {group.title}
                      </h3>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="rounded-full px-3 py-1 text-[11px] font-medium tracking-wide text-secondary-foreground/80 uppercase"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </article>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <Reveal from="left">
              <Card className="detail-card h-full gap-0 p-6 ring-0 sm:p-8">
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

                <Separator className="mt-6 bg-border/70" />

                <div className="mt-6 grid gap-4">
                  {education.map((item) => (
                    <Card
                      key={item.degree}
                      className="mini-card gap-0 rounded-3xl bg-background/70 p-0 ring-0"
                    >
                      <CardHeader className="p-0">
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {item.degree}
                        </CardTitle>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.place}
                        </p>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="mt-3 text-sm text-foreground/78">
                          {item.meta}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={120} from="right">
              <Card className="detail-card h-full gap-0 p-6 ring-0 sm:p-8">
                <p className="section-label">Certification</p>
                <h2 className="mt-3 text-3xl font-[family:var(--font-display)] font-semibold tracking-tight">
                  Continued learning
                </h2>

                <Card className="mini-card mt-8 gap-0 rounded-3xl bg-background/70 p-0 ring-0">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      Python for Beginners
                    </CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Code Tantra
                    </p>
                  </CardHeader>
                </Card>

                <div className="callout-card mt-6">
                  This portfolio is structured for today&apos;s hiring flow:
                  strong headline, real experience, project context, clear
                  skills, and visible contact actions.
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20"
        >
          <Reveal className="contact-band" from="up">
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
          </Reveal>
        </section>
      </main>
    </div>
  )
}

export default App
