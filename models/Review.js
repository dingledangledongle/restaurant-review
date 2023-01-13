
//REVIEW CLASS
class Review {
    constructor(id,restid,review,rating,datePosted,userid,upvote,downvote){
        this.id = id
        this.restid = restid
        this.review = review
        this.userid = userid
        this.rating = rating
        this.datePosted = datePosted
        this.upvote = upvote
        this.downvote = downvote
    }

    getId(){
        return this.id
    }
    getRestid(){
        return this.restid
    }
    getReview(){
        return this.review
    }
    getUserid(){
        return this.userid
    }
    getRating(){
        return this.rating
    }
    getDatePosted(){
        return this.datePosted
    }  
    getUpvote(){
        return this.upvote
    }
    getDownvote(){
        return this.downvote
    }
    
    setId(id){
        this.id = id
    }
    setRestid(restid){
        this.restId = restid
    }
    setReview(review){
        this.review = review
    }
    setUserid(userid){
        this.userid = userid
    }
    setRating(rating){
        this.rating = rating
    }
    setDatePosted(datePosted){
        this.datePosted = datePosted
    }
    setUpvote(upvote){
        this.upvote = upvote
    }
    setDownvote(downvote){
        this.downvote = downvote
    }
}

module.exports = Review