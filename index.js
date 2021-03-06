const express = require("express"),
    app = express(),
    keys = require("./config/keys.js");
    mongoose = require("mongoose"),
    cookieSession = require("cookie-session"),
    passport = require("passport"),
    bodyParser = require("body-parser");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/diaryRoutes")(app);

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });

}

const PORT = process.env.PORT || 5000;
app.listen(PORT);