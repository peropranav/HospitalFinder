var router=require('express').Router();
var addHospitalSchema = require('../model/hospitalDetail');

router.post('/', function (req, res) {

    var data = req.body;

    console.log(req.body);
        var name = data.name;
        var formatted_address = data.formatted_address;
        var phoneNumer = data.phoneNumber;
        var location = data.location;
        var disease_cure = data.disease_cure;
        var ageGroup = data.ageGroup;
    var newHospital = new addHospitalSchema({
        name: name,
        formatted_address: formatted_address,
        location: {
            type: data.location.type,
            coordinates: data.location.coordinates
        },
        phoneNumber:phoneNumer,
        disease_cure:disease_cure,
        ageGroup :ageGroup

    });

    newHospital.save((err, message) =>
    {
        if (err) console.log(err);
        else
        {
            res.json({"addedHospital":true});
        }
    });


})

module.exports = router;