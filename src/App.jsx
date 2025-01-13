import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <main className='overflow-hidden text-tertiary'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
