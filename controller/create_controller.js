const List = require("../models/list");

module.exports.create = function (req, res) {
    List.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }).then((List) => {
        res.redirect('/');
    }).catch((error) => {
        console.log(`${error} in creating the db`);
        return;
    })
}   