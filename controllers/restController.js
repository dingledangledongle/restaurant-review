const RestDB = require('../models/RestaurantDB')

var restDB = new RestDB()

//GETTING ALL THE RESTAURANTS
function getAllRest(request, respond){
    restDB.getAllRest(function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }
    })
}

module.exports = {getAllRest}