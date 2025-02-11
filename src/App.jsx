import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Blog from './pages/Blog'
import Product from './pages/Product'
import { ToastContainer } from 'react-toastify'
import Cart from './pages/Cart'
import PlaceOthers from './pages/PlaceOthers'
import Login from './pages/Login'

function App() {

  return (
    <main className='overflow-hidden text-tertiary'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/place-order" element={<PlaceOthers />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </main>
  )
}

export default App
