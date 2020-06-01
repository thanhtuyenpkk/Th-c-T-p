let loginService = require('../services/login.service')



exports.login = async (req, res) => {
    let user = req.body.user 
    let pass = req.body.pass

    console.log(req.body)
    if(!user) {
        return res.json({ result: false, message: 'Bạn chưa nhập user name' })
    }
    if(!pass) {
        return res.json({ result: false, message: 'Bạn chưa nhập password' })
    }

    let data = await loginService.login(user, pass)
    return res.json(data)
}