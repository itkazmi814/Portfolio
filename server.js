const express = require("express");
const path = require("path");
const port = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(port, function() {
	console.log(`🌎 ==> Server now on port ${port}!`);
});
