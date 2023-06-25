import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BUILDS = [
  {
    icon: './images/cards/icon-watch.svg',
    title: 'Custom Software Development',
    desc: 'Purpose-built software aligned to your business logic — not templated, not generic. We scope, design, and ship what you actually need.',
  },
  {
    icon: './images/cards/icon-arrows.svg',
    title: 'Web Application Development',
    desc: 'Fast, accessible web apps built for real users. From B2B dashboards to consumer platforms — clean UX backed by solid engineering.',
  },
  {
    icon: './images/cards/icon-box.svg',
    title: 'Mobile App Development',
    desc: 'Native-quality iOS and Android apps built with modern cross-platform tooling. Shipped faster, maintained easier, loved by users.',
  },
]

const STATS = [
  { num: '150+', label: 'Clients Worldwide' },
  { num: '10', label: 'Years in Business' },
  { num: '300+', label: 'Projects Shipped' },
  { num: '98%', label: 'Retention Rate' },
]

const useFadeUp = (ref) => {
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.fade-up')
    els.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('visible'),
      })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [ref])
}

const Home = () => {
  const pageRef = useRef(null)
  useFadeUp(pageRef)

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <img src="./images/welcome-bg.jpg" alt="" />
          <div className="hero__overlay" />
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="section-label hero__label">Est. 2014 · Dallas, TX</div>
            <h1 className="hero__title">
              Build What's <em>Next</em>
            </h1>
            <p className="hero__desc">
              We are a software engineering company that works with startups and enterprises
              to build, scale, and maintain digital products that drive real business outcomes.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">Start a Project</Link>
              <Link to="/case-studies" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>View Our Work</Link>
            </div>
          </div>
        </div>
        <div className="hero__badge">
          <div className="hero__badge-num">300+</div>
          <div className="hero__badge-label">Projects Delivered</div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-strip__grid">
            {STATS.map(({ num, label }) => (
              <div key={label} className="stat-item">
                <div className="stat-item__num">{num}</div>
                <div className="stat-item__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What we build */}
      <section className="section">
        <div className="container">
          <div className="fade-up">
            <div className="section-label">What We Build</div>
            <h2 className="section-title">Software for every stage of growth</h2>
            <p className="section-sub">
              From zero to production — we move fast and ship quality at every step.
            </p>
          </div>
          <div className="build-grid">
            {BUILDS.map(({ icon, title, desc }) => (
              <div key={title} className="build-card fade-up">
                <div className="build-card__icon">
                  <img src={icon} alt="" />
                </div>
                <div className="build-card__title">{title}</div>
                <p className="build-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-sm services-preview">
        <div className="container">
          <div className="fade-up">
            <div className="section-label">Our Services</div>
            <h2 className="section-title">Depth where it matters</h2>
            <p className="section-sub">
              Beyond shipping code — we provide the infrastructure and support your product needs to last.
            </p>
          </div>
          <div className="services-preview__grid">
            <div className="service-card fade-up">
              <div className="service-card__img">
                <img src="./images/services/cloud.jpg" alt="Cloud services" />
              </div>
              <div className="service-card__body">
                <div className="service-card__title">Cloud Services & Integration</div>
                <p className="service-card__desc">
                  Cloud-native architecture, wired-up integrations that hold under load.
                  AWS, GCP, Azure — platform-agnostic, infrastructure-serious.
                </p>
                <Link to="/services" className="btn btn-ghost">Learn more</Link>
              </div>
            </div>
            <div className="service-card fade-up">
              <div className="service-card__img">
                <img src="./images/services/support.jpeg" alt="Maintenance and support" />
              </div>
              <div className="service-card__body">
                <div className="service-card__title">Maintenance & Support</div>
                <p className="service-card__desc">
                  Structured maintenance contracts, proactive monitoring, and a dedicated support
                  team that treats your uptime as seriously as you do.
                </p>
                <Link to="/services" className="btn btn-ghost">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <h2 className="cta-banner__title">Ready to build <em>something great?</em></h2>
              <p className="cta-banner__sub">Let's talk about your project — no commitments, just clarity.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/case-studies" className="btn btn-outline">See Case Studies</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
