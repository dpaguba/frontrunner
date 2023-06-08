import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-name">Velocity<span>.</span></div>
          <p className="footer__brand-desc">
            A software engineering company that builds, scales, and maintains digital products
            that drive real business outcomes.
          </p>
        </div>

        <div>
          <div className="footer__col-title">Company</div>
          <div className="footer__col-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="footer__col-title">Services</div>
          <div className="footer__col-links">
            <Link to="/services">Custom Software</Link>
            <Link to="/services">Web Applications</Link>
            <Link to="/services">Mobile Apps</Link>
            <Link to="/services">Cloud & DevOps</Link>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Velocity Inc. All rights reserved.</span>
        <span>Built for builders.</span>
      </div>
    </div>
  </footer>
)

export default Footer
