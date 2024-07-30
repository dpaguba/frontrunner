import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const IFRAME_SOURCE_WIDTH = 1440
const DEFAULT_TILE_HEIGHT = 600

function isLightColor(hex) {
  if (!hex || hex[0] !== '#' || hex.length < 7) return false
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const tileRef = useRef(null)
  const [scale, setScale] = useState(0.25)

  useEffect(() => {
    if (!tileRef.current) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / IFRAME_SOURCE_WIDTH)
    })
    observer.observe(tileRef.current)
    return () => observer.disconnect()
  }, [])

  const iframeHeight = scale > 0
    ? Math.ceil((tileRef.current?.offsetHeight ?? DEFAULT_TILE_HEIGHT) / scale)
    : 2000

  const lightBg = isLightColor(project.bg)
  const indexNumColor = lightBg ? 'rgba(0,0,0,0.09)' : 'rgba(255,255,255,0.07)'

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', cursor: 'default' }}
    >
      <Link
        to={`/demo/${project.id}`}
        ref={tileRef}
        style={{
          position: 'relative',
          aspectRatio: '4/5',
          backgroundColor: project.bg,
          overflow: 'hidden',
          display: 'block',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '32px',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(72px, 12vw, 140px)',
              lineHeight: 0.85,
              color: indexNumColor,
              letterSpacing: '-0.02em',
              userSelect: 'none',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          <div className="display-campaign-sm" style={{ color: project.accent, marginBottom: '16px' }}>
            {project.title}
          </div>
          <div style={{ width: '40px', height: '2px', backgroundColor: project.accent, opacity: 0.6 }} />
        </div>

        {/* clip-path wipe from bottom-to-top reveals the scaled iframe on hover;
            reversing on leave is the natural transition back to inset(100%). */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            clipPath: hovered ? 'inset(0% 0 0 0)' : 'inset(100% 0 0 0)',
            transition: 'clip-path 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
            pointerEvents: 'none',
          }}
        >
          {hovered && (
            <iframe
              src={`/demos/${project.id}/index.html`}
              title={`${project.title} preview`}
              tabIndex={-1}
              style={{
                width: `${IFRAME_SOURCE_WIDTH}px`,
                height: `${iframeHeight}px`,
                border: 'none',
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                pointerEvents: 'none',
                display: 'block',
              }}
            />
          )}
        </div>
      </Link>

      <div style={{ paddingTop: '12px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--color-mute)',
                backgroundColor: 'var(--color-soft-cloud)',
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.4, marginBottom: '4px' }}>
          {project.title}
        </h3>

        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-mute)', lineHeight: 1.5, marginBottom: '8px' }}>
          {project.subtitle}
        </p>

        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-charcoal)', lineHeight: 1.65, marginBottom: '16px' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', gap: '8px' }}>
          <Link to={`/demo/${project.id}`} className="btn-primary" style={{ fontSize: '14px', height: '44px', padding: '0 22px' }}>
            Live Demo
          </Link>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '14px', height: '44px', padding: '0 22px' }}>
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
