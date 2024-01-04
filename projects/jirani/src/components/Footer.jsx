import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-name"><span>J</span>irani</div>
          <p className="footer__tagline">
            An independent restaurant where food, atmosphere, and warmth come together.
            Based in the heart of the city.
          </p>
        </div>
        <div>
          <div className="footer__heading">Navigate</div>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/book">Book a Table</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer__heading">Follow us</div>
          <div className="footer__socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Instagram">
              <i className="fa fa-instagram" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Facebook">
              <i className="fa fa-facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Jirani Restaurant. All rights reserved.</p>
        <a href="tel:+999-888-76-54" className="footer__phone">+999 888 76 54</a>
      </div>
    </div>
  </footer>
)

export default Footer
