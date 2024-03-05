export const finishGithubLogin = async (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/access_token'
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  }
  const params = new URLSearchParams(config).toString()
  const finalUrl = `${baseUrl}?${params}`
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    })
  ).json()
  if ('access_token' in tokenRequest) {
    const { access_token } = tokenRequest
    const apiUrl = 'https://api.github.com'
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json()
    console.log(userData)
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json()

    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    )
    if (!email) {
      if (!emailObj) {
        return res.redirect('/login')
      }
      const existingUser = await User.findOne({ email: emailObj.email })
      if (existingUser) {
        req.session.loggedIn = true
        req.session.user = existingUser
        return res.redirect('/')
      } else {
        const user = await User.create({
          name: userData.name,
          username: userData.login,
          email: emailObj.email,
          password: '',
          socialOnly: true,
          location: userData.location,
        })
        req.session.loggedIn = true
        req.session.user = user
        return res.redirect('/')
      }
    } else {
      return res.redirect('/login')
    }
  }
}
export const edit = (req, res) => res.send('Edit User')
export const remove = (req, res) => res.send('Remove User')
export const logout = (req, res) => res.send('Log out')
export const see = (req, res) => res.send('See User')
