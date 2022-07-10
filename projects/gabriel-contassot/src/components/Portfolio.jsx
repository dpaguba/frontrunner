import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CASES = ['GIVENCHY', 'REPLAY', 'EQUINOX', 'SOPHIE', 'HARLEY', 'RENEW', 'ORIGINALS', 'WORKS']
const IMAGES = ['givenchy', 'replay', 'equinox', 'sophie', 'harley', 'renew', 'originals']

const CONFIG = {
  scaleAmount: 1.3,
  additionalScrollDistance: 0.5,
  scrubAmount: 1,
  clipPathScrubAmount: 0.125,
}

const Portfolio = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray('section')

    sections.forEach((section, index) => {
      const image = document.querySelector(`#case-img__${index + 1}`)
      if (!image) return

      gsap.to(image.querySelector('img'), {
        scrollTrigger: {
          trigger: section,
          start: index === 0 ? 'top top' : 'bottom bottom',
          end: () => {
            const sectionBottom = section.offsetTop + section.offsetHeight
            const extra = window.innerHeight * CONFIG.additionalScrollDistance
            return `+=${sectionBottom - window.innerHeight + extra}`
          },
          scrub: CONFIG.scrubAmount,
        },
        scale: CONFIG.scaleAmount,
        ease: 'none',
      })
    })

    const animateClip = (sectionId, previewId, startClip, endClip, start = 'top center', end = 'bottom top') => {
      const section = document.querySelector(sectionId)
      const preview = document.querySelector(previewId)
      if (!section || !preview) return

      ScrollTrigger.create({
        trigger: section,
        start,
        end,
        onEnter: () => {
          gsap.to(preview, {
            scrollTrigger: { trigger: section, start, end, scrub: CONFIG.clipPathScrubAmount },
            clipPath: endClip,
            ease: 'none',
          })
        },
      })
    }

    animateClip(
      '#case-1', '#case-img__1',
      'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    )

    for (let i = 2; i <= CASES.length; i++) {
      animateClip(
        `#case-${i}`, `#case-img__${i - 1}`,
        'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        'top bottom', 'center center'
      )
      if (i < CASES.length) {
        animateClip(
          `#case-${i}`, `#case-img__${i}`,
          'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          'center center', 'bottom top'
        )
      }
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <main className="main">
      <div className="titles">
        {CASES.map((name, i) => (
          <section key={name} id={`case-${i + 1}`}>
            <h1>{name}</h1>
          </section>
        ))}
        <div className="spacer" />
      </div>

      <div className="case-img">
        {IMAGES.map((name, i) => (
          <div key={name} className="img" id={`case-img__${i + 1}`}>
            <img src={`./assets/images/${name}.jpg`} alt={name} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Portfolio
