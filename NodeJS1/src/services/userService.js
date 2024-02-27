import db from '../models/index'
import bcrypt from 'bcryptjs';
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, eject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //nguoi dung da~ ton tai
                // xong roi so sanh password
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: { email: email },
                    raw: true
                })
                if (user) {
                    // xong roi so sanh password
                    let checkPassword = await bcrypt.compareSync(password, user.password);
                    if (checkPassword) {
                        userData.errCode = 0;
                        userData.errMessage = 'Oke';
                        delete user.password;
                            userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong Password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User's  not found!`
                }

            } else {
                userData.errCode = 1;
                userData.errMessage = `'Your's Email isn't exist in your system. Plz try other email!`;
            }
            resolve(userData)
        } catch (e) {
            eject(e);
        }
    })
}


let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, eject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            eject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin
}