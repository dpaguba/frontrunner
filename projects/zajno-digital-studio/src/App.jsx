import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)
CustomEase.create('hop', 'M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1')

const COUNTER_DURATION = 2000
const COUNTER_END = 100
const COUNTER_INTERVAL = 300

function App() {
  const counterRef = useRef(null)

  useEffect(() => {
    const counter = counterRef.current
    if (!counter) return

    const revealPage = () => {
      gsap.timeline()
        .to('.hero', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', duration: 2, ease: 'hop' })
        .to('.hero', { transform: 'translate(-50%, -50%) scale(1)', duration: 2.25, ease: 'power3.inOut' }, '-=1.75')
        .to('.overlay', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: 2, ease: 'hop' }, '-=2')
        .to('.hero-img img', { transform: 'scale(1)', duration: 2.25, ease: 'power3.inOut' }, '-=2')
    }

    const animateCounter = () => {
      let current = 0
      const start = Date.now()

      const tick = () => {
        const elapsed = Date.now() - start
        if (elapsed < COUNTER_DURATION) {
          current = Math.min(current + Math.floor(Math.random() * 30) + 5, COUNTER_END)
          counter.textContent = current
          setTimeout(tick, COUNTER_INTERVAL)
        } else {
          counter.textContent = COUNTER_END
          gsap.to(counter, { y: -20, duration: 1, ease: 'power3.inOut', onStart: revealPage, delay: 0.5 })
        }
      }
      tick()
    }

    gsap.to(counter, { y: 0, duration: 1, ease: 'power3.out', delay: 1, onComplete: animateCounter })
  }, [])

  return (
    <div className="container">
      <div className="counter">
        <p ref={counterRef}>0</p>
      </div>

      <section className="hero">
        <div className="overlay" />

        <nav>
          <div className="nav-col">
            <div className="nav-items">
              <a href="#">zajno&reg;</a>
            </div>
            <div className="nav-items">
              <p>digital studio</p>
            </div>
          </div>
          <div className="nav-col">
            <div className="nav-items">
              <a href="#">work</a>
              <a href="#">studio</a>
              <a href="#">contact</a>
            </div>
            <div className="nav-items">
              <a href="#">twitter</a>
              <a href="#">instagram</a>
            </div>
            <div className="nav-items">
              <p>los angeles, ca</p>
            </div>
          </div>
        </nav>

        <div className="header">
          <img src="./img/logo.png" alt="zajno" />
        </div>

        <div className="hero-img">
          <img src="./img/temp.jpg" alt="" />
        </div>
      </section>
    </div>
  )
}

export default App
