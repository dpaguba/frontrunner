import { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'

function App() {
  const logoBgRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const updateHeight = () => {
      if (logoBgRef.current && logoRef.current) {
        logoBgRef.current.style.height = `${logoRef.current.offsetHeight}px`
      }
    }

    const handleScroll = () => {
      updateHeight()
      const scrollPercent = Math.min((window.scrollY / window.innerHeight) * 100, 100)
      if (logoBgRef.current) {
        logoBgRef.current.style.width = `${scrollPercent}%`
      }
    }

    updateHeight()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateHeight)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return (
    <>
      <Hero />
      <div className="logo-container">
        <div className="logo-bg" ref={logoBgRef} />
        <img src="./img/logo.svg" alt="The Absent Agency Logo" className="logo" ref={logoRef} />
      </div>
      <div className="skip" />
      <CaseStudies />
    </>
  )
}

export default App
