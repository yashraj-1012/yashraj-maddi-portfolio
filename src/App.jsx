import React from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Cloud,
  Terminal,
  Code2,
  Boxes,
  GitBranch,
  Server,
  ExternalLink,
  MapPin,
  Download,
  Workflow,
  Layers3,
  Smartphone,
  Globe,
  Cpu,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const GITHUB_URL = "https://github.com/yashraj-1012";
const LINKEDIN_URL = "https://linkedin.com/in/yashraj-maddi";
const EMAIL = "yashrajmaddi00@gmail.com";
const RESUME_URL = "/resume.pdf";

const projects = [
  {
    number: "01",
    name: "Production-Style Django Deployment",
    type: "CLOUD / DEPLOYMENT",
    description:
      "A three-tier Django application deployed on AWS EC2 with Docker Compose, Nginx, MySQL, persistent volumes, health checks and a GitHub Actions workflow.",
    tags: ["AWS EC2", "Docker Compose", "Nginx", "MySQL", "GitHub Actions"],
    icon: Cloud,
    tone: "cyan",
    href: "https://github.com/yashraj-1012/django-notes-app",
    code: "docker-compose.yml",
  },
  {
    number: "02",
    name: "Real-Time System Health Dashboard",
    type: "MONITORING / LINUX",
    description:
      "Monitoring scripts for CPU, memory, disk and systemd service health, with CloudWatch integration and least-privilege access.",
    tags: ["Python", "Bash", "Linux", "AWS CloudWatch", "IAM"],
    icon: Cpu,
    tone: "blue",
    href: "https://github.com/yashraj-1012/health-dashboard",
    code: "health_check.py",
  },
  {
    number: "03",
    name: "Multi-Environment AWS Infrastructure",
    type: "INFRASTRUCTURE AS CODE",
    description:
      "Reusable Terraform configuration for separate development, staging and production environments, with an EC2 module to keep infrastructure consistent.",
    tags: ["Terraform", "AWS", "EC2", "IaC", "Git"],
    icon: Boxes,
    tone: "violet",
    href: "https://github.com/yashraj-1012/terraform-multi-environment",
    code: "main.tf",
  },
  {
    number: "04",
    name: "Automated Server Log Monitor",
    type: "AUTOMATION / OPERATIONS",
    description:
      "A Python and Bash utility that scans server logs on a schedule, classifies issues by severity and supports log rotation to reduce repetitive manual review.",
    tags: ["Python", "Bash", "Linux Cron", "Logging", "Git"],
    icon: Terminal,
    tone: "orange",
    href: "https://github.com/yashraj-1012/Server-monitor",
    code: "log_monitor.sh",
  },
  {
    number: "05",
    name: "SFMS Mobile Application",
    type: "MOBILE / APP DEVELOPMENT",
    description:
      "A Flutter and Firebase mobile application with reusable UI features, cloud-backed data integration and a focus on a practical mobile experience.",
    tags: ["Flutter", "Dart", "Firebase"],
    icon: Smartphone,
    tone: "green",
    href: null,
    code: "app.dart",
  },
];

const skills = [
  {
    name: "AWS Services",
    group: "EC2 · S3 · IAM · VPC · RDS · DYNAMODB",
    icon: Cloud,
  },
  { name: "Terraform", group: "INFRASTRUCTURE AS CODE", icon: Boxes },
  { name: "Docker & Compose", group: "CONTAINERS", icon: Boxes },
  { name: "Kubernetes & Helm", group: "ORCHESTRATION", icon: Workflow },
  { name: "GitHub Actions", group: "CI/CD AUTOMATION", icon: GitBranch },
  { name: "Linux & Bash", group: "SYSTEMS / SCRIPTING", icon: Terminal },
  { name: "Python", group: "AUTOMATION / TOOLING", icon: Code2 },
  { name: "Prometheus & Grafana", group: "OBSERVABILITY", icon: Server },
  { name: "Nginx", group: "REVERSE PROXY", icon: Globe },
  { name: "Flutter & Firebase", group: "MOBILE DEVELOPMENT", icon: Smartphone },
];
function SectionLabel({ children, number }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a
          className="wordmark"
          href="#home"
          onClick={closeMenu}
          aria-label="Yashraj home"
        >
          <span className="wordmark-mark">
            Y<span>.</span>
          </span>
          <span className="wordmark-name">YASHRAJ MADDI</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#journey" onClick={closeMenu}>
            Journey
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero-grid bento-grid">
          <div className="card hero-card">
            <div className="eyebrow">
              <span className="status-dot" /> OPEN TO OPPORTUNITIES{" "}
              <span className="eyebrow-divider">/</span> INDIA + REMOTE
            </div>
            <h1>
              Building for
              <br />
              <span className="accent-text">what's next.</span>
            </h1>
            <p className="hero-copy">
              Aspiring Cloud &amp; DevOps Engineer with hands-on projects in
              AWS, Terraform, Docker, Linux monitoring and CI/CD, alongside
              experience building Flutter and Firebase applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a
                className="button button-ghost"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                Connect <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={14} /> Based in India
              </span>
              <span className="meta-separator" />
              <span>AWS · Infrastructure · Automation</span>
            </div>
          </div>

          <div className="card identity-card">
            <div className="card-topline">
              <span>01 / PROFILE</span>
              <ArrowUpRight size={16} />
            </div>
            <div className="avatar-orbit">
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="avatar-core">
                YM<span>.</span>
              </div>
              <span className="orbit-node node-a" />
              <span className="orbit-node node-b" />
              <span className="orbit-node node-c" />
            </div>
            <h2>Yashraj Maddi</h2>
            <p className="muted">Developer in progress. Builder by habit.</p>
            <div className="identity-divider" />
            <div className="identity-bottom">
              <span className="mono">CURRENT FOCUS</span>
              <span className="focus-chip">
                <span /> Cloud &amp; DevOps
              </span>
            </div>
          </div>

          <div className="card focus-card">
            <div className="card-topline">
              <span>02 / WHAT I DO</span>
              <span className="card-index">01—02</span>
            </div>
            <div className="focus-item">
              <div className="focus-icon cyan-icon">
                <Cloud size={21} />
              </div>
              <div>
                <h3>Cloud &amp; DevOps</h3>
                <p>Infrastructure, automation, deployment and reliability.</p>
              </div>
              <ArrowUpRight className="focus-arrow" size={17} />
            </div>
            <div className="focus-item">
              <div className="focus-icon blue-icon">
                <Code2 size={21} />
              </div>
              <div>
                <h3>Software Development</h3>
                <p>Web and mobile applications with thoughtful UI.</p>
              </div>
              <ArrowUpRight className="focus-arrow" size={17} />
            </div>
            <div className="mini-stack">
              <span>AWS</span>
              <span>Terraform</span>
              <span>React</span>
              <span>Flutter</span>
            </div>
          </div>

          <a
            className="card github-card"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <div className="github-top">
              <Github size={22} />
              <ArrowUpRight size={17} />
            </div>
            <div>
              <span className="mono muted">CODE / EXPERIMENTS</span>
              <h3>
                See what I'm
                <br />
                building on GitHub.
              </h3>
            </div>
            <span className="github-link">
              Browse repositories <ArrowRight size={15} />
            </span>
          </a>

          <div className="card quote-card">
            <span className="quote-mark">“</span>
            <p>
              Learn by building.
              <br />
              <span>Improve by shipping.</span>
            </p>
            <div className="quote-foot">
              <span className="quote-line" /> THE WORKING PRINCIPLE
            </div>
          </div>
        </section>

        <section id="work" className="section-block">
          <div className="section-heading">
            <SectionLabel number="01">SELECTED WORK</SectionLabel>
            <div>
              <h2>
                Projects with a <span className="accent-text">purpose.</span>
              </h2>
              <p>
                Cloud and DevOps projects built around deployment,
                infrastructure as code, monitoring and automation.
              </p>
            </div>
            <a
              className="text-link"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              All repositories <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  className={`card project-card tone-${project.tone}`}
                  key={project.number}
                >
                  <div className="project-head">
                    <span className="project-number">
                      {project.number} / 05
                    </span>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} repository`}
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                  </div>
                  <div className="project-visual">
                    <div className="visual-grid" />
                    <div className="visual-icon">
                      <Icon size={29} strokeWidth={1.5} />
                    </div>
                    <span className="visual-code">{project.code}</span>
                  </div>
                  <div className="project-info">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.href ? (
                    <a
                      className="project-cta"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View repository <ArrowRight size={15} />
                    </a>
                  ) : (
                    <div className="project-cta">
                      <span>Repository link not provided</span>
                      <ArrowRight size={15} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="section-block skills-section">
          <div className="section-heading">
            <SectionLabel number="02">TOOLKIT</SectionLabel>
            <div>
              <h2>
                Tools I work <span className="accent-text">with.</span>
              </h2>
              <p>
                A practical toolkit I'm using and expanding through projects.
              </p>
            </div>
          </div>
          <div className="skills-layout">
            <div className="card skills-card">
              <div className="card-topline">
                <span>TECH STACK / SNAPSHOT</span>
                <span className="live-mark">
                  <span /> LEARNING BY DOING
                </span>
              </div>
              <div className="skills-grid">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div className="skill-item" key={skill.name}>
                      <div className="skill-icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <strong>{skill.name}</strong>
                        <span>{skill.group}</span>
                      </div>
                      <CheckCircle2 size={15} className="skill-check" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card learning-card">
              <div className="card-topline">
                <span>ON THE RADAR</span>
                <Terminal size={17} />
              </div>
              <h3>
                Going deeper into
                <br />
                <span className="accent-text">cloud-native.</span>
              </h3>
              <p>
                Hands-on focus across AWS infrastructure, deployment automation,
                Linux operations and observability. Building practical depth
                through projects and continuous learning.
              </p>
              <div className="learning-list">
                <span>
                  <i>01</i> AWS · EC2, S3, VPC, IAM
                </span>
                <span>
                  <i>02</i> Docker · Kubernetes · Helm
                </span>
                <span>
                  <i>03</i> Prometheus · Grafana · CloudWatch
                </span>
              </div>
              <div className="learning-decoration">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-block about-section">
          <div className="section-heading">
            <SectionLabel number="03">A LITTLE ABOUT ME</SectionLabel>
            <div>
              <h2>
                Curious mind.
                <br />
                <span className="accent-text">Practical mindset.</span>
              </h2>
            </div>
          </div>
          <div className="about-grid">
            <div className="card about-card">
              <p>
                I'm a B.Tech Computer Science and Engineering student at MIT
                College of Railway Engineering and Research, Barshi, expected to
                graduate in 2027. My current focus is Cloud and DevOps,
                supported by hands-on projects with AWS, Terraform, Docker,
                Linux and CI/CD.
              </p>
              <p>
                I also completed a Diploma in Computer Engineering from V.V.P.
                Polytechnic, Solapur, in 2024 with 82%. Earlier internship
                experience in hybrid application development strengthened my
                Flutter, Dart and Firebase fundamentals.
              </p>
              <div className="about-signoff">
                <span className="signature">
                  Yashraj<span>.</span>
                </span>
                <span className="mono muted">
                  CLOUD · CODE · CONTINUOUS LEARNING
                </span>
              </div>
            </div>
            <div className="card principles-card">
              <div className="principle">
                <span>01</span>
                <div>
                  <h3>Build with intent</h3>
                  <p>
                    Projects should solve a real problem or teach a useful
                    skill.
                  </p>
                </div>
              </div>
              <div className="principle">
                <span>02</span>
                <div>
                  <h3>Automate the repeatable</h3>
                  <p>
                    Reduce manual work and make the process easier to reproduce.
                  </p>
                </div>
              </div>
              <div className="principle">
                <span>03</span>
                <div>
                  <h3>Keep learning in public</h3>
                  <p>Share progress, take feedback, and keep improving.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="section-block">
          <div className="section-heading">
            <SectionLabel number="04">EXPERIENCE & EDUCATION</SectionLabel>
            <div>
              <h2>
                Foundations to{" "}
                <span className="accent-text">hands-on work.</span>
              </h2>
              <p>
                My education and experience supporting my move into Cloud &amp;
                DevOps.
              </p>
            </div>
          </div>
          <div className="about-grid">
            <div className="card about-card">
              <div className="card-topline">
                <span>INTERNSHIP</span>
                <span className="muted">APP DEVELOPMENT</span>
              </div>
              <h3>Hybrid Application Development Intern</h3>
              <p className="accent-text">
                DK TECHNOS · Flutter · Dart · Firebase
              </p>
              <p>
                Built responsive mobile interfaces, developed reusable features,
                integrated Firebase services, and supported debugging and
                testing.
              </p>
              <div className="identity-divider" />
              <div className="card-topline">
                <span>COURSEWORK</span>
                <span className="muted">OCT 2026</span>
              </div>
              <h3>AWS Skill Builder</h3>
              <p>Well-Architected Solutions course completed.</p>
            </div>
            <div className="card principles-card">
              <div className="principle">
                <span>2027</span>
                <div>
                  <h3>B.Tech, Computer Science &amp; Engineering</h3>
                  <p>
                    MIT College of Railway Engineering and Research, Barshi ·
                    Expected graduation
                  </p>
                </div>
              </div>
              <div className="principle">
                <span>2024</span>
                <div>
                  <h3>Diploma, Computer Engineering</h3>
                  <p>V.V.P. Polytechnic, Solapur · 82%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="card contact-card">
          <div className="contact-glow" />
          <div className="contact-copy">
            <SectionLabel number="05">NEXT STEP</SectionLabel>
            <h2>
              Have a role or project
              <br />
              in <span className="accent-text">mind?</span>
            </h2>
            <p>
              Open to Cloud / DevOps internships, fresher roles and software
              development opportunities across India and remote teams.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${EMAIL}`}>
              {" "}
              <Mail size={17} /> Get in touch <ArrowUpRight size={16} />
            </a>
            <div className="social-row">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
            <a className="resume-link" href={RESUME_URL} download>
              <Download size={15} /> Download resume
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark footer-mark" href="#home">
          <span className="wordmark-mark">
            Y<span>.</span>
          </span>
        </a>
        <span>Designed with curiosity. Built with React.</span>
        <a href="#home">
          Back to top <ArrowUpRight size={14} />
        </a>
        <span className="footer-year">
          © {new Date().getFullYear()} Yashraj Maddi
        </span>
      </footer>
    </div>
  );
}

export default App;
