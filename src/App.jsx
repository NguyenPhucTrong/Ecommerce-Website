import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Blog from './pages/Blog'

function App() {

  return (
    <main className='overflow-hidden text-tertiary'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path='/Blog' element={<Blog />}