
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './widgets/Header/Header'
import Footer from './widgets/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='aboutme' element={<AboutPage/>}/>
          <Route path='skills' element={<SkillsPage/>}/>
          <Route path='projects' element={<ProjectPage/>}/>
          <Route path='contacts' element={<ContactPage/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )

}

export default App
