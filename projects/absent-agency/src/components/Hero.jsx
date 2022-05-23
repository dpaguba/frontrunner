const Hero = () => (
  <main className="main">
    <section className="grid-item grid-item__start">
      <h1 className="grid-item__motto">
        Identity, Experience <span className="nl">& Provocation.</span>
      </h1>
    </section>

    <section className="grid-item grid-item__start">
      <p className="grid-item__about">
        The Absent Agency is an <span className="nl">independent design studio</span> based in Dallas Texas
      </p>
    </section>

    <section className="grid-item__hiddden">
      <p className="grid-item__hiddden-text">
        The Absent Agency is an independent design studio based in Dallas Texas pushing brands through identity,
        experience & provocation.
      </p>
    </section>

    <nav className="grid-item grid-item__end">
      <ul className="grid-item__social-links">
        <li><a href="https://www.instagram.com/absentagency/" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://www.behance.net/A7GENESIS" target="_blank" rel="noreferrer">Behance</a></li>
      </ul>
    </nav>

    <div className="grid-item grid-item__right-bottom">
      <p className="grid-item__copyright">&copy; 2021</p>
    </div>

    <nav className="grid-item grid-item__left-bottom">
      <ul className="grid-item__links">
        <li><a href="mailto:anis@absentagency.com">Contact</a></li>
        <li><a href="#">Residents</a></li>
      </ul>
    </nav>
  </main>
)

export default Hero
