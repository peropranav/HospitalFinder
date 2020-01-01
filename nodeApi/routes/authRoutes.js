var router = require('express').Router();
var authSchema = require('../model/authModel');
router.post('/', function(req,res)
{
    console.log("hello");
    var username = req.body.username;
    var password = req.body.password;

    console.log("#################");
    console.log(username.length);
    if(username.length <= 0) 
    {
        res.json({"userMatch" : false});
    }
    authSchema.findOne({username:username})
    .then(function(result){
    
        console.log(result)
        if(result == null)
        {
            res.json({"userMatch": false});
        }
        
        else
        {

                 if(result.password == password)
                   {
                       res.json({"userMatched": true})
                   }
                 else
                   {
                        res.json({"userMatch": false});

                   }
        }

    })

})
module.exports = router;