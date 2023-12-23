import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STATS = [
  { val: 93, label: 'Drinks on Menu' },
  { val: 120, label: 'Dishes Served' },
  { val: 71, label: 'Appetizers' },
]

const CHEFS = [
  { img: './images/JPG/cook1.jpg', name: 'Marcus Reid', role: 'Head Chef' },
  { img: './images/JPG/cook2.jpg', name: 'Sofia Alvarez', role: 'Pastry Chef' },
  { img: './images/JPG/cook3.jpg', name: 'James Park', role: 'Grill Master' },
]

const StatCounter = ({ val, label }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true
        let c = 0
        const id = setInterval(() => {
          c++
          setCount(c)
          if (c >= val) clearInterval(id)
        }, Math.max(15, 1000 / val))
      },
    })
  }, [val])

  return (
    <div className="stat" ref={ref}>
      <div className="stat__number">{count}</div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="section-label page-hero__label">Our Story</div>
          <h1 className="page-hero__title">More Than a Restaurant.</h1>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story__img-stack">
              <div className="story__img-main">
                <img src="./images/JPEG/restaurant.jpeg" alt="Jirani interior" />
              </div>
              <div className="story__img-accent">
                <img src="./images/JPG/snacks.jpg" alt="Dishes" />
              </div>
            </div>
            <div className="story__text">
              <div className="section-label">Est. 2018</div>
              <h2 className="section-title">The Story of Jirani</h2>
              <p>
                Like every unique place, Jirani has its own special story. The idea for the
                restaurant came to its founders unexpectedly — during a walk through the forest,
                miles from the nearest town, completely cut off from civilisation.
              </p>
              <p>
                Forced to cook from scratch and live off the land, they discovered a deep
                connection to honest, simple food. That experience became Jirani: a place where
                every meal is made with intention, every ingredient chosen with care.
              </p>
              <p>
                Today we serve a community of regulars who come not just for the food —
                but for the feeling of being home.
              </p>
              <Link to="/book" className="btn btn-primary" style={{ marginTop: '8px' }}>
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="stats-grid">
            {STATS.map(s => <StatCounter key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* Chefs */}
      <section className="section">
        <div className="container">
          <div className="section-label">The People Behind the Plates</div>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Our Chefs</h2>
          <div className="chefs-grid">
            {CHEFS.map(({ img, name, role }) => (
              <div key={name} className="chef-card">
                <div className="chef-card__img"><img src={img} alt={name} /></div>
                <div className="chef-card__body">
                  <div className="chef-card__name">{name}</div>
                  <div className="chef-card__role">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-sm" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center', marginBottom: '32px' }}>What Our Guests Say</div>
          <div className="testimonial-card">
            <p className="testimonial-card__quote">
              I will long remember my birthday spent at this restaurant. Warm, welcoming, and
              incredibly delicious. A special thank you for the complimentary fruit platter — a
              beautiful touch. We will be recommending Jirani to everyone. Truly a hidden gem.
            </p>
            <div className="testimonial-card__avatar">
              <img src="./images/JPEG/avatar.jpeg" alt="Nikolay" />
            </div>
            <div className="testimonial-card__name">Nikolay</div>
            <div className="testimonial-card__sub">Regular Guest</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
