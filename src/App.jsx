
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
// import Tech from './components/Tech/Tech'
import Works from './components/Works/Works'
import Feedbacks from './components/Feedbacks/Feedbacks'
import Contacts from './components/Contacts/Contacts'
import { StarsCanvas } from './components/canvas'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/Footer/FooterBottom'
import GithubCalender from './components/GithubCalender/GithubCalender'

function App() {


  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <GithubCalender />
        <Skills />
        {/* <Tech /> */}
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contacts />
          <StarsCanvas />
        </div>
        <Footer />
        <FooterBottom />
      </div>

    </BrowserRouter>
  )
}

export default App
