import { useState } from 'react'
import { Link } from 'react-router-dom'

const ALL_ITEMS = [
  { id: 1, cat: 'burgers', img: './images/JPG/classic.jpg', name: 'Classic Burger', desc: 'Beef patty, aged cheddar, pickles, lettuce, house sauce on a toasted bun.', price: '$8', tag: 'Bestseller' },
  { id: 2, cat: 'burgers', img: './images/JPG/spicy.jpg', name: 'Angry Burger', desc: 'Double smash patty, jalapeños, habanero aioli, crispy shallots.', price: '$14', tag: 'Spicy' },
  { id: 3, cat: 'burgers', img: './images/JPG/dorblu.jpg', name: 'Blue Cheese Burger', desc: 'Grass-fed patty, blue cheese, caramelised onions, brioche bun.', price: '$12', tag: 'Fan Favorite' },
  { id: 4, cat: 'new', img: './images/JPEG/butcher.jpeg', name: "Butcher's Daughter", desc: 'Signature vegetarian burger with falafel, roasted peppers and homemade salsa.', price: '$12', tag: 'Vegan' },
  { id: 5, cat: 'new', img: './images/JPEG/cheeseburger.jpeg', name: 'Cheeseburger', desc: 'Classic cheeseburger with a juicy marbled beef patty and aged cheddar.', price: '$14', tag: 'New' },
  { id: 6, cat: 'new', img: './images/JPEG/chicken.jpeg', name: 'Hot Chick', desc: 'Crispy chicken steak in golden panko breading, hot sauce, coleslaw.', price: '$14', tag: 'New' },
  { id: 7, cat: 'snacks', img: './images/JPG/snacks.jpg', name: 'Loaded Fries', desc: 'Double-cooked fries with cheddar sauce, crispy onions and chives.', price: '$6', tag: '' },
  { id: 8, cat: 'snacks', img: './images/JPG/pancake.jpg', name: 'Pancake Stack', desc: 'Fluffy buttermilk pancakes with maple syrup and seasonal berries.', price: '$8', tag: 'Brunch' },
]

const TABS = [
  { key: 'all', label: 'All Items' },
  { key: 'burgers', label: 'Burgers' },
  { key: 'new', label: 'New Items' },
  { key: 'snacks', label: 'Snacks' },
]

const Menu = () => {
  const [active, setActive] = useState('all')
  const items = active === 'all' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.cat === active)

  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <div className="section-label page-hero__label">Our Menu</div>
          <h1 className="page-hero__title">Fresh. Bold. Unforgettable.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="menu-tabs">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                className={`menu-tab${active === key ? ' active' : ''}`}
                onClick={() => setActive(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {items.map(({ id, img, name, desc, price, tag }) => (
              <div key={id} className="menu-item-card">
                <div className="menu-item-card__img">
                  <img src={img} alt={name} />
                  {tag && <span className="menu-item-card__badge">{tag}</span>}
                </div>
                <div className="menu-item-card__body">
                  <div className="menu-item-card__name">{name}</div>
                  <p className="menu-item-card__desc">{desc}</p>
                  <div className="menu-item-card__row">
                    <span className="menu-item-card__price">{price}</span>
                    <Link to="/book" className="btn btn-primary menu-item-card__order">Order</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <div>
              <h2 className="cta-banner__title">Can't decide? <span className="cta-banner__accent">Come in and ask.</span></h2>
              <p className="cta-banner__sub">Our team will find the right dish for your mood.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/book" className="btn btn-primary">Reserve a Table</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
