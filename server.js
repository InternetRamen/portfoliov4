const express = require("express")
const app = express()
const path = require("path")
const http = require("http")

//set up
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./routes/index")
app.use("/", indexRouter)
const portfolioRouter = require("./routes/portfolio");
app.use("/portfolio", portfolioRouter);


app.use((req, res, next) => {
    res.render("404");
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("404");
});

let port = 6403
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(
        `Website running at http://localhost:${process.env.PORT || "6403"}`
    );

})
