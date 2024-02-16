import Video from '../models/video'

export const home = async (req, res) => {
  try {
    console.log('Start')
    ffffff
    const videos = await Video.find({}).exec()

    console.log('Finished')
    return res.render('home', { pageTitle: 'Home', videos })
  } catch (error) {
    console.error(error)
    return res.status(500).send('Internal Server Error')
  }
  console.log('I finish first')
}

export const watch = (req, res) => {
  const { id } = req.params
  return res.render('watch', { pageTitle: `Watching` })
}
export const getedit = (req, res) => {
  const { id } = req.params
  return res.render('edit', { pageTitle: `Editing` })
}
export const postEdit = (req, res) => {
  const { id } = req.params
  const { title } = req.body
  return res.redirect(`/videos/${id}`)
}

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' })
}

export const postUpload = (req, res) => {
  const { title } = req.body
  return res.redirect('/')
}
