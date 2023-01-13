const ReviewDB = require('../models/ReviewDB')
const Review = require('../models/Review');

var reviewDB = new ReviewDB()

//GETTING REVIEW
function getAllReview(request, respond){
    reviewDB.getAllReview(function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }
    })
}

function addReview(request,respond){
    var now = new Date().toISOString().replace('T',' ').substring(0,19)
    var review = new Review(null,request.body.restid,request.body.review
        ,request.body.rating, now.toString(),request.body.userid,0,0)
    reviewDB.addReview(review,function(error,result){
        if (error){
            console.log('revController')
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

function updateReview(request,respond){
    var now = new Date().toISOString().replace('T',' ').substring(0,19)
    var review = new Review(parseInt(request.params.id), request.body.restid,
    request.body.review, request.body.rating, now.toString(), request.body.userid,
    request.body.upvote, request.body.downvote)
    console.log(request.body.upvote, request.body.downvote)
    reviewDB.updateReview(review, function(error, result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

function deleteReview(request, respond){
    var reviewId = request.params.id
    reviewDB.deleteReview(reviewId, function(error,result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

function updateVote(request, respond){
    var review = new Review(parseInt(request.params.id))
    review.upvote = request.body.upvote
    review.downvote = request.body.downvote
    console.log(review)
    reviewDB.updateVote(review, function(error,result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        } 
    })
}
module.exports = {getAllReview, addReview, updateReview, deleteReview, updateVote}