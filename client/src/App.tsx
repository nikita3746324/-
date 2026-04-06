
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './widgets/Header/Header'
import Footer from './widgets/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )

}

export default App
