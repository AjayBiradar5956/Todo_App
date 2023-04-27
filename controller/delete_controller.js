const List = require("../models/list");

module.exports.delete = function (req, res) {
    // console.log(req.body);
    let desc = req.body.description;
    console.log(desc);
    List.deleteMany({ description: desc })
        .then((List) => {
            console.log(List);
            return List;
            // res.redirect('/');
        }).catch((error) => {
            console.log(error);
        });
}
