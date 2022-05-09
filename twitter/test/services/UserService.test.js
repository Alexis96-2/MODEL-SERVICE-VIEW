const UserServices = require("./../../app/services/UserService")

describe("Test for UserService", ()=>{
    test("1. Create a new user using the User Service", ()=>{
        const user = UserServices.create(1, "Alexis96-2", "Alexis")
        expect(user.username).toBe("Alexis96-2")
        expect(user.name).toBe("Alexis")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    test("2. Get all user data in a list", ()=>{
        const user = UserServices.create(1, "Alexis96-2", "Alexis")
        const userInfoInList = UserServices.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("Alexis96-2")
        expect(userInfoInList[2]).toBe("Alexis")
        expect(userInfoInList[3]).toBe("Sin Bio")
    });
    test("3. Update username", ()=>{
        const user = UserServices.create(1, "Alexis96-2", "Alexis")
        UserServices.updateUserUsername(user, "apahel96")
        expect(user.username).toBe("apahel96")
    });
    test("", ()=>{
        const user1 = UserServices.create(1, "Alexis96-1", "Alexis")
        const user2 = UserServices.create(1, "Alexis96-2", "Alexis")
        const user3 = UserServices.create(1, "Alexis96-3", "Alexis")
        const usernames = UserServices.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("Alexis96-1")
        expect(usernames).toContain("Alexis96-2")
        expect(usernames).toContain("Alexis96-3")
    });
})