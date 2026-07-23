import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Modern Tech Minimalism
 * - Dark navy background (#0a1428) with cyan (#00d9ff) and teal (#0ef5a8) accents
 * - Smooth scroll-triggered reveals with staggered animations
 * - Glassmorphism cards with subtle depth and hover effects
 * - Strategic typography: Syne for display, DM Sans for body
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            className="text-xl font-bold font-syne"
            whileHover={{ scale: 1.05 }}
          >
            AS<span className="text-cyan-400">.</span>
          </motion.div>
          <div className="hidden md:flex gap-8">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors uppercase tracking-wider"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/10"
          >
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-xs text-cyan-400 font-mono tracking-widest">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-syne mb-6 leading-tight"
          >
            Ahmed Sulieman
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Cloud & Code.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            IT Engineer & AWS Certified Cloud Practitioner building software
            that matters — from telecom infrastructure to AI-powered
            humanitarian tools.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-background font-semibold"
            >
              <a href="#projects">
                ↓ View Projects
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-500/25 hover:border-cyan-400 hover:text-cyan-400"
            >
              <a href="mailto:ahmednoooors@gmail.com">✉ Get in Touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-500/25 hover:border-cyan-400 hover:text-cyan-400"
            >
              <a href="https://github.com/WIZZ249" target="_blank">
                ⌥ GitHub
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "40%", label: "Complaint Reduction" },
              { value: "2", label: "Humanitarian Projects" },
              { value: "5+", label: "Certifications" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl font-bold font-syne text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-cyan-400/50" size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-teal-400 font-mono tracking-widest">
                01 — ABOUT
              </span>
              <div className="h-px w-12 bg-teal-400/40" />
            </div>
            <h2 className="text-4xl font-bold font-syne mb-4">
              Engineer with purpose.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              I'm Ahmed Salaheldeen Alamin Sulieman, an IT Engineer and AWS
              Certified Cloud Practitioner based in Nalya, Uganda. I bridge the
              gap between local infrastructure and cloud-native software
              development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                With 3+ years spanning telecom, nonprofit, and IT services
                sectors, I've developed a practical engineering mindset — from
                diagnosing hardware issues at Pinnacle Ltd to cutting customer
                complaints by <span className="text-cyan-400">40% at MTN Sudan</span> through systematic
                process improvements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My focus is now on applying cloud and development skills to{" "}
                <span className="text-cyan-400">humanitarian technology</span> — tools that function in
                the field, under pressure, for people who need them most.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Education:</span> Bachelor of Information
                Technology, MST University, Sudan (2016–2021). Bilingual in{" "}
                <span className="text-cyan-400">Arabic (native)</span> and{" "}
                <span className="text-cyan-400">English (professional)</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="text-xs text-teal-400 font-mono tracking-widest mb-4">
                CERTIFICATIONS
              </div>
              {[
                { icon: "☁️", name: "AWS Certified Cloud Practitioner", year: "Valid 2025 – 2028" },
                { icon: "📋", name: "Google Project Management", year: "2024" },
                { icon: "🔄", name: "Agile Project Management", year: "2024" },
                { icon: "💬", name: "Customer Service Fundamentals", year: "2024" },
                { icon: "🧪", name: "AWS Official Practice Questions", year: "2025" },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="p-3 rounded-lg border border-border bg-card/50 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{cert.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground">
                        {cert.name}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {cert.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-teal-400 font-mono tracking-widest">
                02 — SKILLS
              </span>
              <div className="h-px w-12 bg-teal-400/40" />
            </div>
            <h2 className="text-4xl font-bold font-syne mb-2">
              Technical stack.
            </h2>
            <p className="text-muted-foreground mb-12">
              From cloud infrastructure to full-stack development and IT
              operations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "☁️",
                title: "Cloud Engineering",
                desc: "AWS Certified. Infrastructure design, identity management, and cloud deployment pipelines.",
                tags: ["AWS EC2", "IAM", "S3", "RDS", "Amplify"],
                color: "cyan",
              },
              {
                icon: "⚡",
                title: "Frontend Development",
                desc: "Building responsive, accessible interfaces with modern JavaScript frameworks.",
                tags: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
                color: "teal",
              },
              {
                icon: "🐍",
                title: "Backend & AI",
                desc: "Python-powered APIs and machine learning pipelines for real-world data challenges.",
                tags: ["Python", "Flask", "TensorFlow", "SQLAlchemy"],
                color: "orange",
              },
              {
                icon: "🖥️",
                title: "IT Operations",
                desc: "Hardware lifecycle, network diagnostics, and enterprise support systems.",
                tags: ["Networking", "Hardware", "CRM/Ticketing", "Linux"],
                color: "cyan",
              },
              {
                icon: "🔧",
                title: "DevOps & Tools",
                desc: "Version control, CI/CD workflows, and collaborative development practices.",
                tags: ["Git / GitHub", "VS Code", "npm / Node", "Google Workspace"],
                color: "teal",
              },
              {
                icon: "🌍",
                title: "Soft Skills",
                desc: "Multilingual communicator with cross-cultural experience across Sudan and Uganda.",
                tags: ["Arabic (Native)", "English (Pro)", "Agile", "Training"],
                color: "orange",
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg border border-border bg-card/50 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-bold font-syne mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{skill.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2 py-1 rounded border font-mono ${
                        skill.color === "cyan"
                          ? "border-cyan-500/25 bg-cyan-500/10 text-cyan-400"
                          : skill.color === "teal"
                            ? "border-teal-500/25 bg-teal-500/10 text-teal-400"
                            : "border-orange-500/25 bg-orange-500/10 text-orange-400"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-teal-400 font-mono tracking-widest">
                03 — EXPERIENCE
              </span>
              <div className="h-px w-12 bg-teal-400/40" />
            </div>
            <h2 className="text-4xl font-bold font-syne mb-2">
              Where I've worked.
            </h2>
            <p className="text-muted-foreground mb-12">
              3+ years across telecom, nonprofit, and IT services in Sudan and
              Uganda.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                company: "TAIM Africa Organization",
                role: "Customer Support Specialist",
                period: "2024 – Present",
                location: "Uganda",
                points: [
                  "Handle multi-channel customer inquiries, resolving issues efficiently across digital platforms.",
                  "Train and mentor junior support agents to enhance service workflows and team performance.",
                  "Support onboarding of digital systems and maintain comprehensive service documentation.",
                ],
              },
              {
                company: "Pinnacle Ltd",
                role: "IT Technician Engineer",
                period: "2022 – 2023",
                location: "Sudan",
                points: [
                  "Diagnosed and resolved network, software, and hardware problems across departments.",
                  "Created structured documentation that reduced repetitive support cases by 20%.",
                  "Provided onsite and remote support, managing hardware lifecycle including RAM upgrades.",
                ],
              },
              {
                company: "MTN Sudan Ltd",
                role: "Customer Service Agent",
                period: "2021 – 2023",
                location: "Sudan",
                points: [
                  "Reduced customer complaints by 40% through systematic service improvements.",
                  "Handled SIM registration, billing, and mobile money operations with high satisfaction.",
                  "Contributed to a high-performing team achieving 95%+ customer satisfaction metrics.",
                ],
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors"
              >
                <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-background" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold font-syne text-foreground">
                    {exp.company}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">
                  {exp.role} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-teal-400 flex-shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-teal-400 font-mono tracking-widest">
                04 — PROJECTS
              </span>
              <div className="h-px w-12 bg-teal-400/40" />
            </div>
            <h2 className="text-4xl font-bold font-syne mb-2">
              What I've built.
            </h2>
            <p className="text-muted-foreground mb-12">
              Software with real-world impact — built for the field, not just
              the demo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 p-8 rounded-lg border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs text-teal-400 font-mono tracking-widest">
                  FEATURED · AI / HUMANITARIAN
                </span>
                <h3 className="text-2xl font-bold font-syne mt-2 mb-3">
                  DamageSense AI
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-mono">
                ✓ Model Active
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              An AI-powered dashboard designed for humanitarian field offices to
              classify structural damage in disaster zones. Built on MobileNetV2
              with a custom heuristic analysis layer.
            </p>
            <div className="mb-4 p-4 rounded bg-teal-500/5 border border-teal-500/25">
              <div className="text-xs text-teal-400 font-mono mb-2">
                🐛 TROUBLESHOOTING WIN
              </div>
              <p className="text-sm text-muted-foreground">
                Resolved the "Seashore" misclassification bug — implemented
                keyword-based heuristic overlay.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "Flask", "TensorFlow", "MobileNetV2", "SQLAlchemy"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded border border-orange-500/25 bg-orange-500/10 text-orange-400 font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <Button
              asChild
              variant="outline"
              className="border-cyan-500/25 hover:border-cyan-400 hover:text-cyan-400"
            >
              <a href="https://github.com/WIZZ249/DamageSense-AI" target="_blank">
                <ExternalLink size={16} className="mr-2" />
                GitHub Repo
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                type: "Humanitarian · Platform",
                title: "FairAid",
                desc: "A resource distribution platform designed to streamline aid delivery in underserved regions with equitable allocation tracking.",
                tags: ["React", "AWS S3", "AWS EC2", "Node.js"],
              },
              {
                type: "Web · Developer Portfolio",
                title: "This Portfolio",
                desc: "A fully custom-designed developer portfolio built from scratch featuring responsive layout, CSS animations, and scroll-triggered reveals.",
                tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg border border-border bg-card/50 hover:border-cyan-500/50 transition-all"
              >
                <span className="text-xs text-teal-400 font-mono tracking-widest">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold font-syne mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded border border-cyan-500/25 bg-cyan-500/10 text-cyan-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-cyan-500/25 hover:border-cyan-400 hover:text-cyan-400"
                >
                  <a href="https://github.com/WIZZ249" target="_blank">
                    <ExternalLink size={14} className="mr-1" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Debug Log Section */}
      <section id="debuglog" className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-teal-400 font-mono tracking-widest">
                05 — DEBUG LOG
              </span>
              <div className="h-px w-12 bg-teal-400/40" />
            </div>
            <h2 className="text-4xl font-bold font-syne mb-2">
              The troubleshooting log.
            </h2>
            <p className="text-muted-foreground mb-8">
              Real problems, real solutions. Every bug is a lesson shipped.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border bg-black/40 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">
                ahmed@portfolio ~ debug_log.sh
              </span>
            </div>
            <div className="p-6 space-y-3 font-mono text-sm">
              {[
                {
                  status: "FIXED",
                  issue: "AI Misclassification 'Seashore'",
                  desc: "Implemented keyword-based heuristic layer to prevent false negatives.",
                  color: "text-green-400",
                },
                {
                  status: "FIXED",
                  issue: "TensorFlow Free Tier Timeout",
                  desc: "Replaced heavy MobileNetV2 with lightweight Pillow processing.",
                  color: "text-green-400",
                },
                {
                  status: "FIXED",
                  issue: "Git Remote Rejected",
                  desc: "Resolved via git rebase and coordinated force push.",
                  color: "text-green-400",
                },
                {
                  status: "FIXED",
                  issue: "PowerShell Encoding Mismatch",
                  desc: "Resolved UTF-8 output issues using chcp 65001.",
                  color: "text-green-400",
                },
                {
                  status: "RESOLVED",
                  issue: "Python 3.14 TensorFlow Incompatibility",
                  desc: "Switched to Python 3.12 venv.",
                  color: "text-teal-400",
                },
                {
                  status: "RESOLVED",
                  issue: "SQLAlchemy Session Persistence",
                  desc: "Fixed data not persisting across requests.",
                  color: "text-teal-400",
                },
              ].map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <span className={`flex-shrink-0 font-bold ${log.color}`}>
                    [{log.status}]
                  </span>
                  <div className="flex-1">
                    <span className="text-foreground">{log.issue}</span>
                    <span className="text-muted-foreground"> — {log.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-teal-400 font-mono tracking-widest">
                06 — CONTACT
              </span>
              <div className="h-px w-12 bg-teal-400/40" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-syne mb-4">
                Let's work<br />together.
              </h2>
              <p className="text-muted-foreground mb-8">
                Open to cloud engineering roles, full-stack development
                opportunities, and humanitarian tech collaborations. Based in
                Uganda, available globally.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ahmednoooors@gmail.com",
                    href: "mailto:ahmednoooors@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone / WhatsApp",
                    value: "+256 777 790289",
                    href: "tel:+256777790289",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "@WIZZ249",
                    href: "https://github.com/WIZZ249",
                  },
                ].map((contact, i) => (
                  <motion.a
                    key={i}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-cyan-500/50 transition-all"
                  >
                    <contact.icon className="text-cyan-400" size={20} />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest">
                        {contact.label}
                      </div>
                      <div className="text-foreground font-semibold">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-border bg-card/50"
            >
              <form className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-background font-semibold">
                  Send Message ↗
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border px-6 py-12 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2026 Ahmed Sulieman. Built with React, Tailwind & intent.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/WIZZ249"
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:ahmednoooors@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              ↑ Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
