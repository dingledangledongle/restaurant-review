var express = require('express')

//CONTROLLERS
var restController = require('./controllers/restController')
var reviewController = require('./controllers/reviewController')
var accController = require('./controllers/accountController')
var bookmarkController = require('./controllers/bookmarkController')

//CREATING EXPRESS APPLICATION
var app = express()


app.use(express.static('./public'))
app.use(express.json())

app.route('/getRestaurants').get(restController.getAllRest)

app.route('/getReviews').get(reviewController.getAllReview)
app.route('/addReviews').post(reviewController.addReview)
app.route('/updateReviews/:id').put(reviewController.updateReview)
app.route('/deleteReviews/:id').delete(reviewController.deleteReview)
app.route('/updateReviews/:id/vote').patch(reviewController.updateVote)

app.route('/getAccounts').get(accController.getAllAccount)
app.route('/addAccounts').post(accController.addAccount)
app.route('/updateAccounts/:id').put(accController.updateAccount)
app.route('/deleteAccounts/:id').delete(accController.deleteAccount)

app.route('/getBookmarks').get(bookmarkController.getAllBookmark)
app.route('/addBookmarks').post(bookmarkController.addBookmark)
app.route('/updateBookmarks/:id').put(bookmarkController.updateBookmark)
app.route('/deleteBookmarks/:id').delete(bookmarkController.deleteBookmark)


app.listen(8080,'127.0.0.1')
console.log('Running on http://127.0.0.1:8080')