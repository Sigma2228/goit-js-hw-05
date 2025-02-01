class User {
    constructor(name, age, folowers ) {
        this.name = name
        this.age = age
        this.folowers = folowers
    }

getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.folowers} followers`)
}
}

const sigma = new User('Vladuslav', 20, 1000)
sigma.getInfo()