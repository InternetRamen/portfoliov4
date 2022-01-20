const express = require("express");
const router = express.Router();
const createError = require("http-errors");


router.get("/", function (req, res, next) {
    res.render("portfolio");
});

router.get("/programming", function (req, res, next) {
    res.render("portfolio/programming");
});


router.get("/photography", function (req, res, next) {
    res.render("portfolio/photography");
});





module.exports = router;
