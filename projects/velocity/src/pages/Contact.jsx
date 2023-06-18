import { useState } from 'react'

const Contact = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="section-label page-hero__label">Get in Touch</div>
          <h1 className="page-hero__title">Let's build something together</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', justifyContent: 'center' }}>
                <div style={{ fontSize: '3rem', color: 'var(--accent)' }}>✓</div>
                <h2 className="section-title">Message Received</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="form__group">
                    <label className="form__label">First Name</label>
                    <input className="form__input" type="text" placeholder="John" required />
                  </div>
                  <div className="form__group">
                    <label className="form__label">Last Name</label>
                    <input className="form__input" type="text" placeholder="Doe" required />
                  </div>
                </div>
                <div className="form__group">
                  <label className="form__label">Work Email</label>
                  <input className="form__input" type="email" placeholder="john@company.com" required />
                </div>
                <div className="form__group">
                  <label className="form__label">Company</label>
                  <input className="form__input" type="text" placeholder="Acme Inc." />
                </div>
                <div className="form__group">
                  <label className="form__label">Tell us about your project</label>
                  <textarea
                    className="form__textarea"
                    placeholder="What are you building? What's the timeline? Any constraints we should know about?"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form__submit">Send Message</button>
              </form>
            )}

            <div>
              <div className="contact-card">
                <div className="contact-card__title">Contact Information</div>
                <div className="contact-info">
                  <div className="contact-info__item">
                    <div className="contact-info__icon">📍</div>
                    <div>
                      <div className="contact-info__label">Address</div>
                      <div className="contact-info__value">2100 Ross Avenue, Dallas, TX 75201</div>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">📞</div>
                    <div>
                      <div className="contact-info__label">Phone</div>
                      <div className="contact-info__value">
                        <a href="tel:+12145550190">+1 (214) 555-0190</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">✉️</div>
                    <div>
                      <div className="contact-info__label">Email</div>
                      <div className="contact-info__value">
                        <a href="mailto:hello@velocity.dev">hello@velocity.dev</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">🕐</div>
                    <div>
                      <div className="contact-info__label">Response Time</div>
                      <div className="contact-info__value">Within 1 business day</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
