import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className="showcase-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: scrolled ? 'var(--color-canvas)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-hairline-soft)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          letterSpacing: '-0.01em',
          color: scrolled ? 'var(--color-ink)' : 'var(--color-canvas)',
          textDecoration: 'none',
          textTransform: 'uppercase',
          lineHeight: 1,
          transition: 'color 0.3s ease',
        }}
      >
        DP
      </a>

      <a
        href="https://github.com/dpaguba"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{
          height: '40px',
          fontSize: '14px',
          padding: '0 20px',
          backgroundColor: scrolled ? 'var(--color-ink)' : 'var(--color-canvas)',
          color: scrolled ? 'var(--color-canvas)' : 'var(--color-ink)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        GitHub
      </a>
    </nav>
  )
}
