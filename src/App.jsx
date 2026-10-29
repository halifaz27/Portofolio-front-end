import { motion, useReducedMotion } from "motion/react";
import NavBar from "./components/NavBar";
import dataImage, { listTools, listProyek } from "./data";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
];

const contactLinks = [
  {
    name: "Email",
    value: "halifazissetiawan@gmail.com",
    description: "Let's discuss an opportunity",
    href: "mailto:halifazissetiawan@gmail.com",
    icon: "✉",
    external: false,
  },
  {
    name: "Phone",
    value: "+62 895-7042-47327",
    description: "Get in touch by phone",
    href: "tel:+62895704247327",
    icon: "☎",
    external: false,
  },
  {
    name: "LinkedIn",
    value: "Professional profile",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/in/halief-azis-setiawan-b4b573395/",
    icon: "in",
    external: true,
  },
];

const ease = [0.22, 1, 0.36, 1];

function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 28,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: distance, filter: "blur(5px)" }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-400 sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();

  const tools = Array.isArray(listTools) ? listTools : [];
  const projects = Array.isArray(listProyek) ? listProyek : [];

  const enterFromBottom = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#09090b] text-white selection:bg-violet-500/30 selection:text-violet-100">
      <NavBar />

      <main>
        {/* ==================== HERO ==================== */}
        <section
          id="home"
          aria-labelledby="hero-title"
          className="relative isolate flex min-h-screen scroll-mt-24 items-center overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:px-12"
        >
          {/* Animated background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: [0, 45, 0],
                      y: [0, 25, 0],
                      scale: [1, 1.12, 1],
                    }
              }
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px] sm:h-[500px] sm:w-[500px]"
            />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: [0, -35, 0],
                      y: [0, -30, 0],
                      scale: [1, 1.15, 1],
                    }
              }
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-indigo-600/15 blur-[120px] sm:h-[500px] sm:w-[500px]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          </div>

          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-10 lg:gap-16">
            {/* Hero content */}
            <motion.div
              className="order-2 text-center md:order-1 md:text-left"
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
            >
              <motion.div
                {...enterFromBottom}
                transition={{ duration: 0.7, delay: 0.15, ease }}
                className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2.5 text-xs font-medium text-violet-200 sm:text-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                Front-End Developer
              </motion.div>

              <h1
                id="hero-title"
                className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25, ease }}
                >
                  Building Digital
                </motion.span>

                <motion.span
                  className="mt-2 block bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-300 bg-clip-text pb-1 text-transparent"
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease }}
                >
                  Experiences.
                </motion.span>
              </h1>

              <motion.p
                className="mx-auto mt-7 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8 md:mx-0"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
              >
                I build responsive websites and interactive user interfaces
                using modern front-end technologies. I learn by building
                practical projects and continuously improving my
                development skills.
              </motion.p>

              {/* Skill tags */}
              <motion.ul
                aria-label="Technical skills"
                className="mt-7 flex flex-wrap justify-center gap-2 md:justify-start"
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.6,
                    },
                  },
                }}
              >
                {skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease }}
                    whileHover={
                      reduceMotion ? undefined : { y: -4, scale: 1.03 }
                    }
                    className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-violet-400/40 hover:bg-violet-400/[0.07] hover:text-violet-200 sm:text-sm"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA buttons */}
              <motion.div
                className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:justify-start"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease }}
              >
                <motion.a
                  href="#projects"
                  whileHover={
                    reduceMotion ? undefined : { y: -4, scale: 1.02 }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-colors hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  Explore My Work
                  <span aria-hidden="true">↗</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={
                    reduceMotion ? undefined : { y: -4, scale: 1.02 }
                  }
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-violet-400/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  Let's Connect
                  <span aria-hidden="true">→</span>
                </motion.a>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500 md:justify-start sm:text-sm"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="text-violet-400">
                    ⌘
                  </span>
                  Project-driven learning
                </span>

                <span
                  aria-hidden="true"
                  className="hidden text-zinc-700 sm:inline"
                >
                  •
                </span>

                <span>Open to remote opportunities</span>
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              className="order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.92, y: 25 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
            >
              <motion.div
                className="relative"
                animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2rem] border border-violet-400/10 sm:-inset-5"
                />

                <div
                  aria-hidden="true"
                  className="absolute -inset-10 -z-10 rounded-full bg-violet-600/10 blur-3xl"
                />

                <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
                  {dataImage?.HeroImage ? (
                    <img
                      src={dataImage.HeroImage}
                      alt="Visual representing front-end development"
                      width="600"
                      height="700"
                      fetchPriority="high"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-violet-950 via-zinc-900 to-indigo-950">
                      <span className="text-7xl font-black text-violet-300">
                        {"</>"}
                      </span>
                    </div>
                  )}

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                      My journey
                    </p>

                    <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                      Learn. Build. Improve.
                    </h2>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-300">
                      Turning knowledge into practical web projects.
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-6 -left-3 rounded-2xl border border-white/10 bg-zinc-900/95 p-4 shadow-xl shadow-black/30 backdrop-blur-xl sm:-left-8 sm:p-5"
                  animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                    Current focus
                  </p>

                  <p className="mt-2 text-sm font-bold text-white sm:text-base">
                    React <span className="text-violet-400">+</span> JavaScript
                  </p>

                  <div className="mt-3 flex gap-1.5" aria-hidden="true">
                    <span className="h-1 w-8 rounded-full bg-violet-400" />
                    <span className="h-1 w-5 rounded-full bg-violet-400/50" />
                    <span className="h-1 w-3 rounded-full bg-violet-400/20" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-2 top-8 rounded-xl border border-white/10 bg-zinc-900/95 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:-right-5 sm:px-4"
                  animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-xs font-semibold text-zinc-200">
                    Halief azis setiawan
                  </p>

                  <p className="mt-1 text-[10px] text-violet-300 sm:text-xs">
                    My portofolio
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="scroll-mt-24 border-t border-white/[0.06] bg-white/[0.015] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-400 sm:text-sm">
                About me
              </p>

              <h2
                id="about-title"
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              >
                Growing through
                <span className="block text-zinc-500">
                  hands-on experience.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-zinc-400 sm:text-base">
                I'm an aspiring front-end developer who enjoys turning
                ideas into usable web interfaces. I focus on writing
                structured code, building responsive layouts, and
                understanding how each part of a web application works.
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-400 sm:text-base">
                My portfolio reflects my learning journey through
                practical projects, including a dashboard, a learning
                management system, and a travel website. I'm looking
                for opportunities to learn from experienced developers,
                contribute to real projects, and grow as a developer.
              </p>

              <motion.a
                href="#projects"
                whileHover={reduceMotion ? undefined : { x: 5 }}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-violet-200"
              >
                See what I've built <span aria-hidden="true">→</span>
              </motion.a>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "</>",
                  title: "Front-End Development",
                  description:
                    "Responsive layouts, reusable UI patterns, and interactive experiences.",
                },
                {
                  icon: "{}",
                  title: "Practical Projects",
                  description:
                    "Learning by building websites, dashboards, and application interfaces.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 0.12}>
                  <motion.article
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            borderColor: "rgba(167,139,250,0.4)",
                          }
                    }
                    className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-xl text-violet-300">
                      {item.icon}
                    </div>

                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </motion.article>
                </Reveal>
              ))}

              <Reveal delay={0.2} className="sm:col-span-2">
                <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold">Technical Skills</h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        Technologies I'm learning and using in my projects.
                      </p>
                    </div>

                    <span className="w-fit rounded-lg border border-violet-400/15 bg-violet-400/[0.06] px-3 py-1.5 text-xs font-medium text-violet-300">
                      Front-End
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={
                          reduceMotion
                            ? false
                            : { opacity: 0, scale: 0.9 }
                        }
                        whileInView={
                          reduceMotion
                            ? undefined
                            : { opacity: 1, scale: 1 }
                        }
                        viewport={{ once: true }}
                        transition={{
                          delay: reduceMotion ? 0 : index * 0.05,
                          duration: 0.35,
                        }}
                        whileHover={reduceMotion ? undefined : { y: -3 }}
                        className="rounded-lg border border-white/[0.08] bg-zinc-950 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-violet-400/30 hover:text-violet-200 sm:text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-white/[0.07] pt-6">
                    <h3 className="font-semibold text-white">
                      Tools I Work With
                    </h3>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {tools.map((tool, index) => (
                        <motion.div
                          key={tool.id ?? tool.nama ?? index}
                          initial={
                            reduceMotion ? false : { opacity: 0, x: -12 }
                          }
                          whileInView={
                            reduceMotion ? undefined : { opacity: 1, x: 0 }
                          }
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: reduceMotion ? 0 : index * 0.06,
                            ease,
                          }}
                          whileHover={reduceMotion ? undefined : { x: 4 }}
                          className="flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.06] bg-zinc-950/70 p-3 transition-colors hover:border-violet-400/20"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.035] p-1.5">
                            {tool.gambar ? (
                              <img
                                src={tool.gambar}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-contain"
                                onError={(event) => {
                                  event.currentTarget.style.display = "none";
                                }}
                              />
                            ) : (
                              <span className="text-sm font-bold text-violet-300">
                                {(tool.nama || "?").slice(0, 2)}
                              </span>
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-zinc-200">
                              {tool.nama || "Tool"}
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                              {tool.ket || "Development tool"}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==================== PROJECTS ==================== */}
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <SectionHeading
                  eyebrow="Selected work"
                  title="Projects built through practice."
                  description="A closer look at my work, experiments, and progress in front-end development."
                />

                <motion.a
                  href="https://github.com/halifaz27"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  className="inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <span aria-hidden="true">⌘</span>
                  GitHub Profile
                  <span aria-hidden="true">↗</span>
                </motion.a>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => {
                const projectName = project.nama || "Untitled Project";
                const projectTools = Array.isArray(project.tools)
                  ? project.tools
                  : [];

                return (
                  <Reveal
                    key={project.id ?? projectName}
                    delay={index * 0.12}
                  >
                    <motion.article
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -8,
                              borderColor: "rgba(167,139,250,0.4)",
                            }
                      }
                      transition={{ duration: 0.3, ease }}
                      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101013] transition-colors hover:shadow-2xl hover:shadow-violet-950/15"
                    >
                      {/* Project preview */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                        {project.gambar ? (
                          <motion.img
                            src={project.gambar}
                            alt={`${projectName} project screenshot`}
                            loading="lazy"
                            whileHover={
                              reduceMotion ? undefined : { scale: 1.06 }
                            }
                            transition={{ duration: 0.6, ease }}
                            className="h-full w-full object-cover object-top"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-950 to-zinc-900">
                            <span className="text-4xl font-bold text-violet-300">
                              {"</>"}
                            </span>
                          </div>
                        )}

                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"
                        />

                        <span className="absolute left-4 top-4 rounded-lg border border-white/15 bg-zinc-950/85 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-violet-200 backdrop-blur-md sm:text-xs">
                          PROJECT {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="absolute bottom-4 right-4 rounded-lg border border-white/10 bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-md">
                          {project.kategori || "Web Development"}
                        </span>
                      </div>

                      {/* Project information */}
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-violet-300">
                            {projectName}
                          </h3>

                          <span
                            aria-hidden="true"
                            className="shrink-0 text-lg text-zinc-600 transition-colors group-hover:text-violet-300"
                          >
                            ↗
                          </span>
                        </div>

                        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
                          {project.desk ||
                            "Project description coming soon."}
                        </p>

                        <ul
                          aria-label={`${projectName} technologies`}
                          className="mt-5 flex flex-wrap gap-2"
                        >
                          {projectTools.map((technology) => (
                            <li
                              key={technology}
                              className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-medium text-zinc-400 sm:text-xs"
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.07] pt-5">
                          <motion.a
                            href={project.live || "#projects"}
                            target={project.live ? "_blank" : undefined}
                            rel={
                              project.live
                                ? "noopener noreferrer"
                                : undefined
                            }
                            whileHover={
                              reduceMotion ? undefined : { scale: 1.03 }
                            }
                            whileTap={
                              reduceMotion ? undefined : { scale: 0.97 }
                            }
                            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 sm:text-sm"
                          >
                            Live Demo
                            <span aria-hidden="true">↗</span>
                          </motion.a>

                          <motion.a
                            href={
                              project.source ||
                              "https://github.com/halifaz27"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={
                              reduceMotion ? undefined : { scale: 1.03 }
                            }
                            whileTap={
                              reduceMotion ? undefined : { scale: 0.97 }
                            }
                            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:border-violet-400/30 hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 sm:text-sm"
                          >
                            Source Code
                            <span aria-hidden="true">⌘</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-10 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-7 text-center sm:px-8">
                <p className="text-sm text-zinc-400">
                  Interested in how I build and learn?
                </p>

                <motion.a
                  href="https://github.com/halifaz27"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduceMotion ? undefined : { x: 5 }}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-violet-200"
                >
                  Explore more on GitHub
                  <span aria-hidden="true">→</span>
                </motion.a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="scroll-mt-24 border-t border-white/[0.06] bg-white/[0.015] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
        >
          <motion.div
            className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-400/15 bg-[#0d0b12] px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { x: [0, -20, 0], y: [0, 15, 0] }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-violet-600/15 blur-[100px]"
              />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { x: [0, 20, 0], y: [0, -15, 0] }
                }
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]"
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
              {/* Contact introduction */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-400 sm:text-sm">
                  Get in touch
                </p>

                <h2
                  id="contact-title"
                  className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Let's build something
                  <span className="block bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                    meaningful together.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                  I'm open to connecting with developers, learning from
                  new experiences, and exploring junior front-end
                  opportunities, including remote roles worldwide.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <motion.a
                    href="https://github.com/halifaz27"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    View GitHub
                    <span aria-hidden="true">↗</span>
                  </motion.a>

                  <motion.a
                    href="mailto:halifazissetiawan@gmail.com"
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-violet-400/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    Email Me
                    <span aria-hidden="true">→</span>
                  </motion.a>
                </div>
              </div>

              {/* Contact information */}
              <div className="grid gap-3">
                {contactLinks.map((contact, index) => (
                  <motion.a
                    key={contact.name}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={
                      contact.external ? "noopener noreferrer" : undefined
                    }
                    initial={
                      reduceMotion ? false : { opacity: 0, x: 20 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: reduceMotion ? 0 : index * 0.12,
                      ease,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 5,
                            borderColor: "rgba(167,139,250,0.4)",
                          }
                    }
                    className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors hover:bg-white/[0.045] sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/[0.08] text-lg font-bold text-violet-300 transition-colors group-hover:border-violet-400/25 group-hover:bg-violet-500/[0.14]">
                      {contact.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium text-zinc-500">
                        {contact.name}
                      </span>

                      <span className="mt-1 block break-words text-sm font-semibold text-zinc-100 sm:text-base">
                        {contact.value}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-zinc-500">
                        {contact.description}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg text-zinc-600 transition-colors group-hover:text-violet-300"
                    >
                      ↗
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.08] pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
              <p>Based in Indonesia.</p>
              <p>Open to remote opportunities worldwide.</p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/[0.06] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <motion.a
            href="#home"
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            className="text-sm font-bold tracking-tight text-white transition-colors hover:text-violet-300"
          >
            My Portfolio<span className="text-violet-400">.</span>
          </motion.a>

          <p className="text-xs leading-6 text-zinc-500 sm:text-sm">
            © {new Date().getFullYear()} Portfolio. Built with React
            and Tailwind CSS.
          </p>

          <motion.a
            href="https://github.com/halifaz27"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-violet-300"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </motion.a>
        </div>
      </footer>
    </div>
  );
}

export default App;
