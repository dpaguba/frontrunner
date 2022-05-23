import { useEffect } from 'react'

const CASES = [
  { img: './img/case_1.png', alt: 'Congruent Architecture', title: 'Congruent Architecture', label: 'Rebrand-2019', imgClass: 'case-study__v-image rotate', wrapperAlign: 'center', infoClass: 'case-study__info', textClass: 'special' },
  { img: './img/case_2.png', alt: 'DYAD Digital Marketing', title: 'DYAD Digital Marketing', label: 'CX consulting-2018', imgClass: 'case-study__h-image', wrapperAlign: 'end', infoClass: 'case-study__info', textClass: 'pt18' },
  { img: './img/case_3.png', alt: 'No Matter Skin Care', title: 'No Matter Skin Care', label: 'Brand Identity-2019', imgClass: 'case-study__v-image', wrapperAlign: 'start', infoClass: 'case-study__info-flex', textClass: 'pl18' },
  { img: './img/case_4.png', alt: 'Dallas CreativeSpace', title: 'Dallas CreativeSpace', label: 'Rebrand-2018', imgClass: 'case-study__v-image', wrapperAlign: 'center', infoClass: 'case-study__info-flex', textClass: 'special-flex' },
  { img: './img/case_5.png', alt: 'Relic CBD', title: 'Relic CBD', label: 'Brand Identity-2019', imgClass: 'case-study__h-image', wrapperAlign: 'end', infoClass: 'case-study__info', textClass: 'special' },
]

const CaseStudies = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.case-study__wrapper')
      const bottomLimit = window.innerHeight - 10

      items.forEach(item => {
        const rect = item.getBoundingClientRect()
        const totalHeight = rect.height

        if (rect.bottom > bottomLimit) {
          item.classList.add('visible')
          const visibleHeight = bottomLimit - rect.top
          if (visibleHeight < totalHeight && visibleHeight > 0) {
            item.style.clipPath = `inset(0 0 ${totalHeight - visibleHeight}px 0)`
          }
        } else if (rect.top < window.innerHeight) {
          item.classList.add('visible')
          item.classList.remove('hidden')
          item.style.clipPath = ''
        }

        if (rect.top < 0) {
          item.classList.add('visible')
          const hiddenHeight = Math.abs(rect.top)
          if (hiddenHeight < totalHeight) {
            item.style.clipPath = `inset(${hiddenHeight}px 0 0 0)`
          } else {
            item.classList.add('hidden')
            item.classList.remove('visible')
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="case-study">
      {CASES.map((c, i) => (
        <article key={i} className={`case-study__wrapper ${c.wrapperAlign}`}>
          <div className={c.infoClass}>
            <img src={c.img} alt={c.alt} className={c.imgClass} />
            <div className={`case-study__info-text ${c.textClass}`}>
              <h4>{c.title}</h4>
              <p>{c.label}</p>
              <a href="#" className="case-study__info-link">→ CASE STUDY</a>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default CaseStudies
