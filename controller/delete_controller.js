const List = require("../models/list");

module.exports.delete = function (req, res) {
    let desc = req.body.description;
    List.deleteMany({ description: desc })
        .then((List) => {
            return List;
        }).catch((error) => {
            console.log(error);
        });
}
