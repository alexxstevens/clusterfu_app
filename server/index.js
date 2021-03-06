const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require("../config/database");
const User = require("../models/user");
const Category = require("../models/category");

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());

app.post("/users", (req, res) => {
	console.log("attempted");
	const user = new User(req.body);
	user
		.save()
		.then(() => {
			res.status(200).send(user);
			res.redirect("/");
		})
		.catch((e) => {
			res.status(400).send(e);
		});
});

app.get("/users", (req, res) => {
	User.find({})
		.then((users) => {
			res.status(200).send(users);
		})
		.catch((e) => {
			res.status(400).send(e);
		});
});

app.get("/users/:id", (req, res) => {
	const _id = req.params.id;
	User.findById(_id)
		.then((user) => {
			if (!user) {
				return res.status(404).send();
			}
			res.status(200).send(user);
		})
		.catch((e) => {
			res.status(500).send();
		});
});

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
