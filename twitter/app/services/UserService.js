const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){
        return [user.id, user.username, user.name, user="Sin Bio"]
    }
    static updateUserUsername(user, newUsername){
        return user.username=newUsername
    }
    static getAllUsernames = (users) => {
        return [users[0].username, users[1].username, users[2].username]
    }
}
module.exports = UserService