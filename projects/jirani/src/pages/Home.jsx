import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  { icon: '✦', title: 'Magical Atmosphere', desc: 'Step into a space where warm light, rich aromas, and effortless hospitality make every visit feel special.' },
  { icon: '◈', title: 'Finest Ingredients', desc: 'Every dish is crafted from locally sourced, seasonal ingredients — quality you can taste in every bite.' },
  { icon: '◇', title: 'Honest Prices', desc: 'Great food should be accessible. Our menu is priced to let you come back as often as you like.' },
]

const FAVORITES = [
  { img: './images/JPG/classic.jpg', name: 'Classic Burger', desc: 'Juicy beef patty, aged cheddar, house-made pickles and our signature sauce.', price: '$8', tag: 'Bestseller' },
  { img: './images/JPG/spicy.jpg', name: 'Angry Burger', desc: 'Double smash patty with jalapeños, habanero aioli and crispy shallots.', price: '$14', tag: 'Spicy' },
  { img: './images/JPG/dorblu.jpg', name: 'Blue Cheese Burger', desc: 'Grass-fed patty, creamy blue cheese, caramelised onions on a brioche bun.', price: '$12', tag: 'Fan Favorite' },
]

const useFadeUp = (ref) => {
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.fade-up')
    els.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('visible'),
      })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [ref])
}

const Home = () => {
  const pageRef = useRef(null)
  useFadeUp(pageRef)

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__bg-img">
            <img src="./images/JPG/menu-bg.jpg" alt="" />
          </div>
          <div className="hero__overlay" />
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="section-label hero__label">Est. 2018 · Dallas, TX</div>
            <h1 className="hero__title">
              Where Every Meal Becomes a <em>Memory</em>
            </h1>
            <p className="hero__desc">
              Jirani is an independent restaurant built around bold flavours, warm hospitality,
              and ingredients worth talking about.
            </p>
            <div className="hero__actions">
              <Link to="/menu" className="btn btn-primary">View Full Menu</Link>
              <Link to="/book" className="btn btn-outline">Reserve a Table</Link>
            </div>
          </div>
        </div>
        <div className="hero__scroll">Scroll</div>
      </section>

      {/* Features */}
      <section className="section-sm features">
        <div className="features__grid">
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} className="feature fade-up">
              <div className="feature__icon">{icon}</div>
              <div className="feature__title">{title}</div>
              <p className="feature__desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Favorites */}
      <section className="section">
        <div className="container">
          <div className="favorites__header">
            <div>
              <div className="section-label fade-up">Popular Right Now</div>
              <h2 className="section-title fade-up">Customer Favorites</h2>
            </div>
            <Link to="/menu" className="favorites__link fade-up">
              See full menu →
            </Link>
          </div>
          <div className="favorites__grid">
            {FAVORITES.map(({ img, name, desc, price, tag }) => (
              <div key={name} className="dish-card fade-up">
                <div className="dish-card__img"><img src={img} alt={name} /></div>
                <div className="dish-card__body">
                  <div className="dish-card__name">{name}</div>
                  <p className="dish-card__desc">{desc}</p>
                  <div className="dish-card__footer">
                    <span className="dish-card__price">{price}</span>
                    <Link to="/book" className="btn btn-primary dish-card__btn">Order</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <h2 className="cta-banner__title">Celebrate at One of the <span className="cta-banner__accent">Finest Restaurants</span></h2>
              <p className="cta-banner__sub">Business lunch from <strong>$12</strong> — available every weekday until 3 pm.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/book" className="btn btn-primary">Book a Table</Link>
              <Link to="/menu" className="btn btn-outline">See Menu</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
