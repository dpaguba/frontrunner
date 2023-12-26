import { useState } from 'react'

const Book = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="section-label page-hero__label">Reservations</div>
          <h1 className="page-hero__title">Book Your Table</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="book-grid">
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', justifyContent: 'center' }}>
                <div style={{ fontSize: '3rem' }}>✦</div>
                <h2 className="section-title">Reservation Received</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Thank you! We will confirm your booking by phone or email within 24 hours.
                  We look forward to seeing you at Jirani.
                </p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>Make Another Reservation</button>
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
                <div className="form__row">
                  <div className="form__group">
                    <label className="form__label">Email Address</label>
                    <input className="form__input" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form__group">
                    <label className="form__label">Phone Number</label>
                    <input className="form__input" type="tel" placeholder="+1 234 567 8900" />
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__group">
                    <label className="form__label">Date</label>
                    <input className="form__input" type="date" required />
                  </div>
                  <div className="form__group">
                    <label className="form__label">Time</label>
                    <select className="form__select" required>
                      <option value="">Select time</option>
                      {['12:00', '12:30', '13:00', '13:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form__group">
                  <label className="form__label">Number of Guests</label>
                  <select className="form__select" required>
                    <option value="">Select</option>
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="9+">9+ Guests (group booking)</option>
                  </select>
                </div>
                <div className="form__group">
                  <label className="form__label">Special Requests (optional)</label>
                  <textarea className="form__textarea" placeholder="Allergies, anniversary setup, high chair..." />
                </div>
                <button type="submit" className="btn btn-primary form__submit">Confirm Reservation</button>
              </form>
            )}

            <div>
              <div className="contact-card">
                <div className="contact-card__title">Contact & Location</div>
                <div className="contact-info">
                  <div className="contact-info__item">
                    <div className="contact-info__icon">📍</div>
                    <div>
                      <div className="contact-info__label">Address</div>
                      <div className="contact-info__value">123 Oak Street, Dallas, TX 75201</div>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">📞</div>
                    <div>
                      <div className="contact-info__label">Phone</div>
                      <div className="contact-info__value">
                        <a href="tel:+999-888-76-54">+999 888 76 54</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">✉️</div>
                    <div>
                      <div className="contact-info__label">Email</div>
                      <div className="contact-info__value">
                        <a href="mailto:hello@jirani.com">hello@jirani.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <div className="contact-info__icon">🕐</div>
                    <div>
                      <div className="contact-info__label">Hours</div>
                      <div className="contact-info__value">
                        Mon–Fri: 12:00–22:00<br />
                        Sat–Sun: 11:00–23:00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-placeholder">📍 Map placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Book
