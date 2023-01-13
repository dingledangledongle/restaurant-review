const BookmarkDB = require('../models/BookmarkDB')
const Bookmark = require('../models/Bookmark')

var bookmarkDB = new BookmarkDB()

function getAllBookmark(request,respond){
    bookmarkDB.getAllBookmark(function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }
    })
}

function addBookmark(request,respond){
    var bookmark = new Bookmark(request.body.restid1,request.body.userid,
        request.body.restid2,request.body.restid3,request.body.restid4, request.body.restid5)
    bookmarkDB.addBookmark(bookmark,function(error,result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

function updateBookmark(request, respond){
    var bookmark = new Bookmark(request.body.restid1,parseInt(request.params.id),
    request.body.restid2,request.body.restid3,request.body.restid4, request.body.restid5)
    bookmarkDB.updateBookmark(bookmark, function(error, result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

function deleteBookmark(request,respond){
    var bookmarkId = request.params.id
    bookmarkDB.deleteBookmark(bookmarkId, function(error,result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

module.exports = {getAllBookmark, addBookmark, updateBookmark, deleteBookmark}