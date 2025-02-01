function Account(login, email) {
this.login = login;
this.email = email
}
Account.prototype.getInfo = function() {
    console.log(`${this.login}, ${this.email}`)
}
const user = new Account('psina', 'sobaka777@gmail.com')
user.getInfo()