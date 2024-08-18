import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { projects } from '../data/projects'

const LOAD_STATE = { LOADING: 'loading', READY: 'ready', ERROR: 'error' }

export default function DemoViewer() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const headerRef = useRef(null)
  const iframeRef = useRef(null)
  const [loadState, setLoadState] = useState(LOAD_STATE.LOADING)

  const project = projects.find((p) => p.id === slug)

  useEffect(() => {
    if (!project) return

    // HEAD request guards against the Chrome error-page context that appears
    // when the dev server restarts while the user is on this route, which
    // would otherwise cause a cross-protocol iframe security error.
    const controller = new AbortController()
    fetch(`/demos/${slug}/index.html`, { signal: controller.signal, method: 'HEAD' })
      .then((res) => setLoadState(res.ok ? LOAD_STATE.READY : LOAD_STATE.ERROR))
      .catch(() => setLoadState(LOAD_STATE.ERROR))

    return () => controller.abort()
  }, [slug, project])

  useEffect(() => {
    if (loadState !== LOAD_STATE.READY || !headerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      )
      gsap.fromTo(
        iframeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.15, ease: 'power2.out' }
      )
    })
    return () => ctx.revert()
  }, [loadState])

  if (!project) {
    return <StatusScreen message="Project not found." onBack={() => navigate('/')} />
  }

  if (loadState === LOAD_STATE.ERROR) {
    return (
      <StatusScreen
        message={
          <>
            Demo assets not found.{' '}
            <span style={{ color: 'var(--color-mute)' }}>
              Run{' '}
              <code style={{ fontFamily: 'monospace', fontSize: '13px', backgroundColor: 'var(--color-soft-cloud)', padding: '2px 6px', borderRadius: '4px' }}>
                npm run build:demos
              </code>{' '}
              then restart the dev server.
            </span>
          </>
        }
        onBack={() => navigate('/')}
      />
    )
  }

  if (loadState === LOAD_STATE.LOADING) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh', backgroundColor: 'var(--color-ink)' }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-stone)' }}>
          Loading
        </span>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', overflow: 'hidden' }}>
      <header
        ref={headerRef}
        style={{
          flexShrink: 0,
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          backgroundColor: 'var(--color-ink)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <button
          onClick={() => navigate('/')}
          className="demo-nav-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            fontFamily: 'var(--font-ui)',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Showcase
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 500, color: 'var(--color-canvas)' }}>
            {project.title}
          </span>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: project.accent, flexShrink: 0 }} />
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-nav-btn"
          style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}
        >
          GitHub
        </a>
      </header>

      <iframe
        ref={iframeRef}
        src={`/demos/${slug}/index.html`}
        title={project.title}
        style={{ flex: 1, width: '100%', border: 'none', display: 'block' }}
      />
    </div>
  )
}

function StatusScreen({ message, onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100dvh', gap: '20px', padding: '24px', textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--color-charcoal)', lineHeight: 1.6, maxWidth: '420px' }}>
        {message}
      </p>
      <button className="btn-primary" onClick={onBack}>
        Back to Showcase
      </button>
    </div>
  )
}
