import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        headlineRef.current.children,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.9, stagger: 0.1 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      style={{
        minHeight: '100dvh',
        backgroundColor: 'var(--color-ink)',
        color: 'var(--color-canvas)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 24px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ width: '100%', position: 'relative' }}>
        <div
          ref={headlineRef}
          style={{ overflow: 'hidden' }}
          aria-label="Things Built Things Shipped"
        >
          {['THINGS BUILT', 'THINGS SHIPPED'].map((line) => (
            <div
              key={line}
              className="display-campaign"
              style={{
                display: 'block',
                color: 'var(--color-canvas)',
                willChange: 'transform',
              }}
            >
              {line}
            </div>
          ))}
        </div>

        <div
          ref={subRef}
          style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'var(--color-stone)',
              maxWidth: '480px',
            }}
          >
            Full-stack developer based in Germany. Shipped React projects across
            Web3, e-commerce and studio interfaces.
          </p>

          <div ref={ctaRef}>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
