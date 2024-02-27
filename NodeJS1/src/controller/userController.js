import userService from '../services/userService'
let handleLogin = async (req, res) => {
    //api thi tra ve status.status(200) hoat dong bth
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!' //chua dien mat khau hoac tai khoan
        })
    }
    let userData = await userService.handleUserLogin(email, password);
    console.log(userData);
    //check email nguoi dung co ton tai k (exist)
    //so sanh password
    //return userInfo
    //access_token:JWT json web token
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

module.exports = {
    handleLogin: handleLogin,
}