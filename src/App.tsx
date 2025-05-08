import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navbar />
      <main className="relative w-full">
        <Header />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
