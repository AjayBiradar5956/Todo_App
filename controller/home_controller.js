const List = require("../models/list");

module.exports.home = function (req, res) {
    List.find({})
        .then((List) => {
            return res.render('home', {
                title: 'My ToDo List',
                todo_list: List
            });
        })
        .catch((err) => {
            console.log(err);
        });
}