var db = require('../db-con')

//GETTING RESTAURANT DETAILS FROM DATABASE
class RestDB{
    getAllRest(callback){
        var sql = 'SELECT * from restaurant_review.restaurant'
        db.query(sql, callback)
    }
}

module.exports = RestDB