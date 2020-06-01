let db = require('../model/index')

exports.login = async (user, pass) => {
   // stop
   let strSQL = `SELECT login_id, pass FROM users WHERE login_id = '${user}'`
   let data = await db.sequelize.query(strSQL, { type: db.sequelize.QueryTypes.SELECT })
   if(!data || data.length === 0) {
       return { result: false, message: 'Bạn nhập sai account' }
   } else {
        if (data[0].pass === pass) {
            return { result: true, message: 'Đăng nhập thành công' }
        } else {
            return { result: false, message: 'Bạn nhập sai pasword' }
        }
   }
}
