import { useState } from 'react'
import { Link } from 'react-router-dom'

const CASES = [
  {
    label: 'Computer Vision',
    tag: 'Computer Vision · Embedded AI',
    img: './images/case-study/computer-vision.jpeg',
    title: 'Real-Time Object Detection for Automotive Systems',
    body: `A Fortune 100 company — a global leader in consumer electronics, home appliances, and mobile communications — needed an object detection system for automotive use. The system had to identify obstacles and estimate distances using a single video feed from a moving monocular camera, running in real time on power-constrained embedded hardware.

Velocity designed a lightweight inference pipeline that met strict latency and accuracy targets without exceeding the hardware's thermal envelope. The solution shipped to production on schedule and has since been integrated into two product lines.`,
  },
  {
    label: 'Machine Learning',
    tag: 'Machine Learning · Recommendations',
    img: './images/case-study/ml.jpeg',
    title: 'Visual Recommendation Engine at Scale',
    body: `The same Fortune 100 client needed a visual image recommendation system — similar to reverse image search — tailored for creative industries and visual arts platforms. The challenge: sub-second response times at high query volume, while returning semantically meaningful results, not just pixel similarity.

Velocity built a scalable ML pipeline that extracts visual embeddings and ranks results using approximate nearest-neighbour search. The recommendation layer increased content engagement by over 40% within three months of launch.`,
  },
  {
    label: 'Big Data',
    tag: 'Big Data · Infrastructure',
    img: './images/case-study/big-data.jpeg',
    title: 'Custom DBMS for South Korea\'s Largest Search Portal',
    body: `South Korea's biggest internet company ran critical internal services on Oracle, SQL Server, and MySQL — licensing costs were unsustainable and no off-the-shelf DBMS handled Korean and Asian language edge cases reliably. They decided to build an in-house DBMS.

Velocity joined the project in early 2009 and has shipped every major release since. The system now handles billions of queries per day, supports the full Unicode CJK block without degradation, and has reduced infrastructure licensing costs by over 60%.`,
  },
]

const CaseStudies = () => {
  const [active, setActive] = useState(0)
  const cs = CASES[active]

  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="section-label page-hero__label">Our Work</div>
          <h1 className="page-hero__title">Real challenges.<br />Shipped solutions.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="cs-tabs">
            {CASES.map((c, i) => (
              <button
                key={c.label}
                className={`cs-tab${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="cs-panel" key={active}>
            <div className="cs-panel__img">
              <img src={cs.img} alt={cs.label} />
            </div>
            <div className="cs-panel__content">
              <div className="cs-panel__tag">{cs.tag}</div>
              <h2 className="cs-panel__title">{cs.title}</h2>
              {cs.body.split('\n\n').map((para, i) => (
                <p key={i} className="cs-panel__body" style={{ marginBottom: i < cs.body.split('\n\n').length - 1 ? '16px' : 0 }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2 className="cta-banner__title">Have a complex challenge?</h2>
              <p className="cta-banner__sub">We have solved hard problems before. Tell us about yours.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
