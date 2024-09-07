import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import DemoViewer from './components/DemoViewer'

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/demo/:slug" element={<DemoViewer />} />
      </Routes>
    </BrowserRouter>
  )
}
