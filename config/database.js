const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://127.0.0.1:27017/clusterfuDB-api", {
	useUnifiedTopology: true,
	useCreateIndex: true,
	useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
	console.log("connected to db");
});

mongoose.connection.on("error", (err) => {
	console.log("error: ", err);
	return connect();
});

mongoose.connection.on("disconnected", () => {
	console.log("disconnected");
});

module.exports = db;
