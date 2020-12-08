const mongoose = require("mongoose");
const validator = require("validator");
const config = require("../config/database");

const User = mongoose.model("User", {
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		trim: true, //take out white spaces
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Email is invalid");
			}
		},
	},
	password: {
		type: String,
		required: true,
		trim: true, //take out white spaces
		minlength: 7,
		validate(value) {
			if (value.toLowerCase().includes("password")) {
				throw new Error("Password cannot contain 'password'");
			}
		},
	},
});

module.exports = User;

// module.exports.getUserById = function (id, callback) {
// 	User.findById(id, callback);
// };

// module.exports.getUserByUsername = function (username, callback) {
// 	const query = { username: username };
// 	User.findOne(query, callback);
// };

// module.exports.addUser = function (newUser, callback) {
// 	bcrypt.genSalt(10, (err, salt) => {
// 		bcrypt.hash(newUser.password, salt, (err, hash) => {
// 			if (err) throw err;
// 			newUser.password = hash;
// 			newUser.save(callback);
// 		});
// 	});
// };

// module.exports.comparePassword = function (candidatePassword, hash, callback) {
// 	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
// 		if (err) throw err;
// 		callback(null, isMatch);
// 	});
// };
