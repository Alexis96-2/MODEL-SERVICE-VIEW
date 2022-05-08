const User = require('./../../app/models/User')

describe("Unit Tests for user class", ()=>{
test('Create a user object', ()=>{
    //Aqui vas a invocar el codigo que usaras en tu app
    const user = new User(1, "Alexis96-2", "Alexis", "Bio")
    expect(user.id).toBe(1)
    expect(user.username).toBe("Alexis96-2")
    expect(user.name).toBe("Alexis")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()//Verifica que no sea indefinido
    expect(user.lastUpdate).not.toBeUndefined()
});
test('Add getters', ()=>{
    const user = new User(1, "Alexis96-2", "Alexis", "Bio")
    expect(user.getUsername).toBe("Alexis96-2")
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()//Verifica que no sea indefinido
    expect(user.getLastUpdate).not.toBeUndefined()
});
test('Add setters', ()=>{
    const user = new User(1, "Alexis96-2", "Alexis", "Bio")
    user.setUsername = "apahel96"
    expect(user.username).toBe("apahel96")
    user.setBio = "New Bio"
    expect(user.bio).toBe("New Bio")
});
})