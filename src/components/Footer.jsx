export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="showcase-footer"
      style={{
        backgroundColor: 'var(--color-canvas)',
        borderTop: '1px solid var(--color-hairline)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              letterSpacing: '-0.01em',
              lineHeight: 1,
            }}
          >
            DP
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-mute)' }}>
            Dmytro Pahuba
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-hairline)' }}>·</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-mute)' }}>
            Full-stack Developer
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-hairline)' }}>·</span>
          <a
            href="https://github.com/dpaguba"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--color-mute)',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
        </div>

        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'var(--color-stone)' }}>
          © {year} Dmytro Pahuba. All projects are open source.
        </span>
      </div>
    </footer>
  )
}
