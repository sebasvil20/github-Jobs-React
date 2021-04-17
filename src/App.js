import { Router } from '@reach/router'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Home path='/' />
        <Detail path='/detail/:jobId' />
      </Router>
      <Footer />
    </div>
  )
}

export default App
