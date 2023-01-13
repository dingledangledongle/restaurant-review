var db = require('../db-con')

//GETTING REVIEW FROM DATABASE
class ReviewDB{
    getAllReview(callback){
        var sql = 'SELECT * from restaurant_review.review'
        db.query(sql,callback)
    }

    addReview(review, callback){
        var sql = `INSERT INTO review (restid,review,rating,datePosted,userId,good,bad) VALUES (?,?,?,?,?,?,?)`
        db.query(
            sql,
            [review.getRestid(),review.getReview(),review.getRating(),review.getDatePosted(),review.getUserid(),review.getUpvote(),review.getDownvote()
            ],callback)
        
    }
    updateReview(review, callback){
        var sql = 'UPDATE review SET review = ?, rating = ?, datePosted = ?, good = ?, bad = ? WHERE _id = ?'
        return db.query(sql, [review.getReview(),review.getRating(), review.getDatePosted(), review.getUpvote(), review.getDownvote(), review.getId()]
        , callback)
    }
    
    deleteReview(reviewId, callback){
        var sql = 'DELETE from review WHERE _id = ?'
        return db.query(sql, [reviewId], callback)
    }

    updateVote(review, callback){
        var sql = 'UPDATE review SET good = ?, bad = ? WHERE _id = ?'
        return db.query(sql, [review.getUpvote(),review.getDownvote(), review.getId()], callback)
    }
}

module.exports = ReviewDB