import { ChatbotWidget } from '../components/domain/ChatbotWidget'
import { PortfolioHeader } from '../components/domain/PortfolioHeader'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { groupProjects, personalProjects, softSkills, technicalSkills } from '../utils/portfolioData'

export function HomePage() {
  const [isSending, setIsSending] = useState(false)
  const [formNotice, setFormNotice] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  useEffect(() => {
    if (!formNotice) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setFormNotice(null)
    }, 5000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [formNotice])

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSending(true)
    setFormNotice(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xpwrprkw', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Unable to send message.')
      }

      form.reset()
      setFormNotice({
        type: 'success',
        message: 'Your message has been sent to Phelokazi Madala.',
      })
    } catch {
      setFormNotice({
        type: 'error',
        message: 'Message could not be sent right now. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <PortfolioHeader />

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-12">
        <section id="home" className="rounded-3xl border border-cyan-900/30 bg-slate-900/60 p-8">
          <p className="text-cyan-300">Software Developer | IT Graduate | AI Associate</p>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">Phelokazi Madala</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Welcome to my portfolio. I build practical digital solutions with a focus on modern
            frontend development, data-driven thinking, and collaborative execution.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="rounded-md bg-cyan-400 px-4 py-2 font-semibold text-slate-900" href="#projects">
              View Projects
            </a>
            <a
              className="rounded-md border border-cyan-500 px-4 py-2"
              href="/Madala.P.pdf"
              download="Phelokazi-Madala-Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </section>

        <section id="about">
          <SectionHeading id="about-title" title="About Me" />
          <div className="grid gap-6 md:grid-cols-[260px,1fr]">
            <img src="/P.M.jfif" alt="Phelokazi Madala" className="h-64 w-64 rounded-full border-4 border-cyan-400 object-cover" />
            <p className="leading-8 text-slate-300">
              I am a motivated software developer with a strong foundation in software
              development, data analysis, and AI. I enjoy solving real-world problems and turning
              ideas into useful products through thoughtful planning and continuous learning.
              Detail-oriented and adaptable IT graduate with a Diploma in Information Technology
              and hands-on experience in software development, AI systems, and full-stack web
              applications. Skilled in designing, developing, and maintaining reliable, scalable,
              and user-focused solutions across frontend and backend environments. Experienced in
              applying problem-solving and algorithmic thinking to deliver functional systems,
              performing debugging and troubleshooting, and collaborating within teams to meet
              project objectives. Passionate about building secure, maintainable applications and
              continuously improving technical skills in a fast-paced development environment.
            </p>
          </div>
        </section>

        <section id="skills">
          <SectionHeading id="skills-title" title="Technical Skills" />
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(technicalSkills).map(([category, values]) => (
              <article key={category} className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-4">
                <h3 className="mb-3 text-lg font-semibold text-cyan-300">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span key={value} className="rounded-full border border-cyan-800 px-3 py-1 text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="soft-skills">
          <SectionHeading id="soft-skills-title" title="Soft Skills" />
          <article className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-4">
            <div className="flex flex-wrap gap-2">
              {softSkills.map((value) => (
                <span key={value} className="rounded-full border border-cyan-800 px-3 py-1 text-sm">
                  {value}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section id="education">
          <SectionHeading id="education-title" title="Education" />
          <div className="space-y-4">
            <article className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-cyan-300">
                Diploma in Information Technology (Software Development)
              </h3>
              <p className="text-slate-300">Nelson Mandela University</p>
            </article>
            <article className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-cyan-300">National Senior Certificate</h3>
              <p className="text-slate-300">Byletts Combined High School</p>
            </article>
          </div>
        </section>

        <section id="experience">
          <SectionHeading id="experience-title" title="Experience" />
          <div className="space-y-4">
            <article className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-cyan-300">AI Associate - CAPACITI</h3>
              <p className="text-slate-300">March 2025 - 31 March 2026</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Participating in intensive AI and software development training.</li>
                <li>
                  Building AI-powered solutions including chatbot systems and automation
                  tools.
                </li>
                <li>
                  Working on collaborative technical projects focused on real-world problem
                  solving.
                </li>
                <li>
                  Gaining exposure to AI concepts, prompt engineering, and intelligent systems
                  development.
                </li>
              </ul>
              <p className="mt-3 text-slate-300">
                <span className="font-semibold text-cyan-300">Achievement:</span> 2nd Place -
                Group Chatbot Project (CAPACITI Programme). Awarded second place for a
                team-developed chatbot solution presented during the programme.
              </p>
            </article>
            <article className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-cyan-300">
                Frontend Developer / AI Associate - Hapo Technology
              </h3>
              <p className="text-slate-300">July 2025 - 31 March 2026</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>
                  Contributing to the development of web applications using React,
                  JavaScript, and Supabase.
                </li>
                <li>Assisting in building and testing frontend interfaces.</li>
                <li>Supporting backend integration and authentication systems.</li>
                <li>
                  Working on AI-driven and data-focused features within company projects.
                </li>
                <li>
                  Taking lead on selected projects while collaborating within a development
                  team, using Git and GitHub for version control and efficient code
                  management.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="certificates">
          <SectionHeading id="certificates-title" title="Certificates" />
          <article className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-5">
            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              <li>IBM Software Engineering</li>
              <li>IBM Artificial Intelligence (AI)</li>
              <li>IBM Generative AI</li>
              <li>IBM Prompt Engineering</li>
              <li>IBM Git and GitHub</li>
              <li>IBM HTML, CSS, and JavaScript</li>
              <li>IBM Python for Data Science</li>
            </ul>
          </article>
        </section>

        <section id="projects">
          <SectionHeading id="projects-title" title="Projects" />
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-cyan-300">Group Projects</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {groupProjects.map((project) => (
                  <article key={project.title} className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-5">
                    <h4 className="text-xl font-semibold text-cyan-300">{project.title}</h4>
                    <p className="mt-3 whitespace-pre-line text-slate-300">{project.description}</p>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-cyan-300 underline"
                      >
                        <FaExternalLinkAlt aria-hidden="true" className="text-sm" />
                        View Demo
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-cyan-300">Personal Projects</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {personalProjects.map((project) => (
                  <article key={project.title} className="rounded-xl border border-cyan-900/40 bg-slate-900/60 p-5">
                    <h4 className="text-xl font-semibold text-cyan-300">{project.title}</h4>
                    <p className="mt-3 whitespace-pre-line text-slate-300">{project.description}</p>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-cyan-300 underline"
                      >
                        <FaExternalLinkAlt aria-hidden="true" className="text-sm" />
                        View Demo
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <SectionHeading id="contact-title" title="Get In Touch" />
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr),minmax(0,1.5fr)]">
            <article className="rounded-2xl border border-cyan-900/40 bg-slate-900/60 p-5">
              <p className="mb-4 text-sm leading-7 text-slate-300">
                Ready to connect? Reach out directly or send a message using the form.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:phelokazimadala@yahoo.com"
                  className="flex items-center gap-3 rounded-lg border border-cyan-900/40 bg-slate-950/60 px-3 py-3 text-slate-200 transition hover:border-cyan-700 hover:text-cyan-300"
                >
                  <FaEnvelope aria-hidden="true" className="text-base" />
                  <span className="text-sm">phelokazimadala@yahoo.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/phelokazi-madala/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-cyan-900/40 bg-slate-950/60 px-3 py-3 text-slate-200 transition hover:border-cyan-700 hover:text-cyan-300"
                >
                  <FaLinkedin aria-hidden="true" className="text-base" />
                  <span className="text-sm">linkedin.com/in/phelokazi-madala</span>
                </a>
                <a
                  href="https://github.com/PhelokaziMadala"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-cyan-900/40 bg-slate-950/60 px-3 py-3 text-slate-200 transition hover:border-cyan-700 hover:text-cyan-300"
                >
                  <FaGithub aria-hidden="true" className="text-base" />
                  <span className="text-sm">github.com/PhelokaziMadala</span>
                </a>
              </div>
              <div className="mt-4 overflow-hidden rounded-lg border border-cyan-900/40">
                <div className="flex items-start gap-2 border-b border-cyan-900/40 bg-slate-950/70 px-3 py-2 text-sm text-slate-200">
                  <FaMapMarkerAlt aria-hidden="true" className="mt-0.5 text-cyan-300" />
                  <div>
                    <p className="font-semibold text-cyan-300">Current Location: Delft, Cape Town</p>
                    <p className="text-slate-300">Cape Town, Western Cape, South Africa</p>
                  </div>
                </div>
                <iframe
                  title="Current location map - Delft, Cape Town"
                  src="https://maps.google.com/maps?q=Delft%2C%20Cape%20Town%2C%20Western%20Cape%2C%20South%20Africa&z=13&output=embed"
                  className="h-52 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
            <form
              onSubmit={handleContactSubmit}
              className="space-y-3 rounded-2xl border border-cyan-900/40 bg-slate-900/60 p-5"
            >
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-lg border border-cyan-900/60 bg-slate-950 px-3 py-3 text-sm outline-none transition focus:border-cyan-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-lg border border-cyan-900/60 bg-slate-950 px-3 py-3 text-sm outline-none transition focus:border-cyan-500"
              />
              <textarea
                name="message"
                placeholder="Write your message"
                required
                className="h-32 w-full rounded-lg border border-cyan-900/60 bg-slate-950 px-3 py-3 text-sm outline-none transition focus:border-cyan-500"
              />
              <button
                type="submit"
                disabled={isSending}
                className="rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </main>
      {formNotice ? (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm rounded-lg border border-cyan-700 bg-slate-900/95 px-4 py-3 shadow-lg">
          <p className={formNotice.type === 'success' ? 'text-cyan-300' : 'text-rose-300'}>
            {formNotice.message}
          </p>
        </div>
      ) : null}
      <ChatbotWidget />
    </div>
  )
}
