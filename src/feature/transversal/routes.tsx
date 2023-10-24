import { Route, Routes } from 'react-router-dom'
import {  Home, HomeAdmin, TagGenerator } from './pages'

export const TransversalRoutes = () => {
  return (
    <Routes>
      <Route path='inicio' element={<Home/>} />
      <Route path='home' element={<HomeAdmin />} />
      <Route path='home/tag' element={<TagGenerator/>} />
    </Routes>
  )
}
