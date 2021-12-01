const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index');
});
router.get("/photos", function (req, res, next) {
    res.render("photos");
});
router.get("/projects", function (req, res, next) {
    res.sendStatus(200);
});

module.exports = router;