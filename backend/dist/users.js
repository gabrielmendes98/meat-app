"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'jureg@gmail.com': new User('jureg@gmail.com', 'jureg', '12345'),
    'gabriel@gmail.com': new User('gabriel@gmail.com', 'gabriel', '12345')
};
