const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index');
});
router.get("/about", function (req, res, next) {
    res.render("about");
});
router.get("/portfolio", function (req, res, next) {
    res.sendStatus(404);
});

module.exports = router;