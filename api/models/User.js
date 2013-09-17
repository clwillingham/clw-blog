/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */
var bcrypt = require('bcrypt');

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true
        },
        title: 'string',
        toJSON: function () {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }

    },
    beforeCreate: function (values, next) {
        bcrypt.hash(values.password, 10, function (err, hash) {
            if (err) return next(err);
            values.password = hash;
            next();
        });
    }
};
