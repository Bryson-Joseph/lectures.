import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    )
    const json = await response.json()
    setMovie(json.data.movie)
    setLoading(false)
  }

  useEffect(() => {
    getMovie()
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <p>{movie.description_full}</p>
    </div>
  )
}

export default Detail
