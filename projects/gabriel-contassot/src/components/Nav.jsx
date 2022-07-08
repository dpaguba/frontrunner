import { useEffect, useRef } from 'react'

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function useTextScramble(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const links = Array.from(el.querySelectorAll('a'))
    const intervals = new Map()

    const scramble = (link) => {
      const original = link.textContent
      link.dataset.original = original
      clearInterval(intervals.get(link))
      let iteration = 0

      const id = setInterval(() => {
        link.textContent = original
          .split('')
          .map((char, i) =>
            i < iteration ? original[i] : CHARSET[Math.floor(Math.random() * CHARSET.length)]
          )
          .join('')

        if (iteration >= original.length) {
          clearInterval(id)
          link.textContent = original
        }
        iteration += 1 / 3
      }, 40)

      intervals.set(link, id)
    }

    const restore = (link) => {
      clearInterval(intervals.get(link))
      link.textContent = link.dataset.original || link.textContent
    }

    links.forEach(link => {
      link.addEventListener('mouseenter', () => scramble(link))
      link.addEventListener('mouseleave', () => restore(link))
    })

    return () => {
      links.forEach(link => {
        clearInterval(intervals.get(link))
        link.removeEventListener('mouseenter', () => scramble(link))
        link.removeEventListener('mouseleave', () => restore(link))
      })
    }
  }, [ref])
}

const Nav = () => {
  const scrambleRef = useRef(null)
  useTextScramble(scrambleRef)

  return (
    <div className="fixed">
      <nav className="data">
        <div className="data-line">
          <h1 className="data-text">GABRIEL CONTASSOT</h1>
          <div className="data-symbol">
            <img src="./assets/svgs/start.svg" alt="star" />
          </div>
        </div>
        <div className="data-line">FREELANCE DESIGN DIRECTOR</div>
        <div className="data-line">
          <p className="data-text">18.24</p>
          <p className="data-text">—</p>
          <p className="data-text">SELECTED WORKS</p>
        </div>
        <ul className="data-line" data-text-scramble="" ref={scrambleRef}>
          <li><a href="#">INFO</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
