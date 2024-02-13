export const trending = (req, res) => {
    const videos = [{
            title: 'First Video',
            rating: 5,
            comments: 2,
            createdAt: '2 minutes ago',
            views: 59,
            id: 1,
        },
        {
            title: 'Second video',
            rating: 5,
            comments: 4,
            createdAt: '2 minutes ago',
            views: 79,
            id: 1,
        },
        {
            title: 'Third video',
            rating: 5,
            comments: 9,
            createdAt: '2 minutes ago',
            views: 99,
            id: 1,
        },
    ]
    return res.render('home', { pageTitle: 'Home', videos })
}

export const see = (req, res) => res.render('watch')
export const edit = (req, res) => res.render('edit')
export const search = (req, res) => res.send('Search')
export const upload = (req, res) => res.send('Upload')
export const deleteVideo = (req, res) => {
    return res.send('Delete Video')
}