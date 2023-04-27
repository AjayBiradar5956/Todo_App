const List = require("../models/list");

module.exports.create = function (req, res) {

    List.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }).then((List) => {
        return res.redirect('/');
    }).catch((error) => {
        return console.log(`${error} in creating the db`);
    })
}   