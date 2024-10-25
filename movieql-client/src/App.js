import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './Routes/Movies'
import Movie from './Routes/Movie'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}
