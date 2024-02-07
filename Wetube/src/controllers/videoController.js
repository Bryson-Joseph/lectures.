export const trending = (req, res) => res.render('home')
export const see = (req, res) => {
  return res.send(`<DOCTYPE html><html lang="ko"><head><title>Wetube</title></head><body><h1>Watch Video #${req.params.id}</h1></body><footer>&copy;2024 - All right are reserved</footer></html>
  `)
}

export const edit = (req, res) => {
  return res.send(
    `<DOCTYPE html><html lang="ko"><head><title>Wetube</title></head><body><h1>Edit video #${req.params.id}</h1></body><footer>&copy;2024 - All right are reserved</footer></html>`
  )
}
export const search = (req, res) => res.send('Search')
export const upload = (req, res) => res.send('Upload')
export const deleteVideo = (req, res) => {
  return res.send('Delete Video')
}
