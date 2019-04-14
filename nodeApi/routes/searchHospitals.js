var router=require('express').Router();
var searchHospitalSchema  = require('../model/hospitalDetail');
router.post('/', function (req, res) {
    var x = req.body.geoLat;  //geolocation
    var y = req.body.geoLong;  //geolocation
    var disease_cure = req.body.disease_cure;
    var sendResultArray = [];
    var sendResultArrayAfterAgeFilter =[];
    var maxDist = 5000;
    if(req.body.maxDist > 0)
    {
      maxDist = req.body.maxDist;
    }
  
    console.log(x + " " + y);


    searchHospitalSchema.find(
        {
          location:
            { $near :
               {
                 $geometry: { type: "Point",  coordinates: [ x, y ] },
                 $maxDistance: maxDist
                 
               }
            }
        }
     ).then(function(result){
       if(disease_cure.length == 0)
       {
         sendResultArray = result;
        console.log(sendResultArray);
         //res.json(sendResultArray);
       }
       else
       {
       for(var i = 0 ; i<result.length;i++)
       {
         if(result[i].disease_cure == req.body.disease_cure )
         {
           sendResultArray.push(result[i]);
         }
       }
       console.log(sendResultArray);
         //res.json(sendResultArray);
      }

      if(req.body.ageGroup.length == 0)
      {
        res.json(sendResultArray);
      }
      else
      {
        for(var i =0 ; i<sendResultArray.length;i++)
        {
          if(sendResultArray[i].ageGroup == req.body.ageGroup)
          {
            sendResultArrayAfterAgeFilter.push(sendResultArray[i]);
            
          }
          
          
        }
        res.json(sendResultArrayAfterAgeFilter);
      }
         
     })


})

module.exports = router;