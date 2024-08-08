import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.1,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="showcase-section"
      style={{
        backgroundColor: 'var(--color-canvas)',
      }}
    >
      <div
        style={{
          paddingTop: '0',
          marginBottom: '48px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--color-mute)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '8px',
            }}
          >
            Selected Work
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              letterSpacing: '-0.01em',
            }}
          >
            Projects
          </h2>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            fontWeight: 400,
            color: 'var(--color-mute)',
            maxWidth: '320px',
            lineHeight: 1.6,
          }}
        >
          {projects.length} projects · React · Open Source
        </p>
      </div>

      <div
        className="showcase-section-gap"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))',
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ opacity: 0 }}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
