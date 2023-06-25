import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    num: '01',
    img: './images/cards/icon-watch.svg',
    photo: './images/services/cloud.jpg',
    title: 'Custom Software Development',
    desc: 'We build software shaped entirely around your business — your workflows, your logic, your scale. No bloated off-the-shelf systems, no bolt-on customizations. From discovery to deployment, we design and engineer what you actually need, then ship it.',
  },
  {
    num: '02',
    img: './images/cards/icon-arrows.svg',
    photo: './images/services/support.jpeg',
    title: 'Web Application Development',
    desc: 'Fast, accessible web applications built for real users in real conditions. Whether it\'s a B2B dashboard, a SaaS platform, or a consumer-facing product — we deliver clean UX backed by solid, maintainable engineering. Performance is not an afterthought.',
  },
  {
    num: '03',
    img: './images/cards/icon-box.svg',
    photo: './images/services/cloud.jpg',
    title: 'Mobile App Development',
    desc: 'Native-quality iOS and Android experiences built with modern cross-platform tooling. Faster to ship, easier to maintain, and smooth enough that users never think about the tech underneath. We handle the full lifecycle from architecture to app store.',
  },
  {
    num: '04',
    img: './images/cards/icon-arrows.svg',
    photo: './images/services/support.jpeg',
    title: 'Cloud Services & Integration',
    desc: 'We migrate your systems to cloud-native architecture and wire up integrations that actually hold under load. AWS, GCP, Azure — platform-agnostic and infrastructure-serious. We design for resilience and cost efficiency from day one.',
  },
]

const EXTRAS = [
  { num: '05', title: 'DevOps & CI/CD', desc: 'Pipelines, containerisation, and deployment automation so your team ships without fear.' },
  { num: '06', title: 'Software Maintenance', desc: 'Structured support contracts with proactive monitoring and a team that treats your uptime like theirs.' },
  { num: '07', title: 'Technical Consulting', desc: 'Architecture reviews, stack decisions, and roadmap planning from engineers who have built at scale.' },
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

const Services = () => {
  const pageRef = useRef(null)
  useFadeUp(pageRef)

  return (
    <div ref={pageRef}>
      <div className="page-hero">
        <div className="container">
          <div className="section-label page-hero__label">What We Do</div>
          <h1 className="page-hero__title">Services built<br />for builders</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map(({ num, photo, title, desc }) => (
              <div key={num} className="service-full-card fade-up">
                <div className="service-full-card__img">
                  <img src={photo} alt={title} />
                </div>
                <div className="service-full-card__body">
                  <div className="service-full-card__num">{num}</div>
                  <div className="service-full-card__title">{title}</div>
                  <p className="service-full-card__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm services-extras">
        <div className="container">
          <div className="fade-up">
            <div className="section-label">More Capabilities</div>
            <h2 className="section-title">Everything else you need</h2>
          </div>
          <div className="services-extras__grid">
            {EXTRAS.map(({ num, title, desc }) => (
              <div key={num} className="extra-card fade-up">
                <div className="extra-card__num">{num}</div>
                <div className="extra-card__title">{title}</div>
                <p className="extra-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <h2 className="cta-banner__title">Not sure where to start?</h2>
              <p className="cta-banner__sub">We help you scope and prioritise before a single line of code is written.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary">Talk to Us</Link>
              <Link to="/case-studies" className="btn btn-outline">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
