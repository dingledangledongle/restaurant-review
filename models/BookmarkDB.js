var db = require('../db-con')

//GETTING BOOKMARK FROM DATABASE
class BookmarkDB{
    getAllBookmark(callback){
        var sql = 'SELECT * from restaurant_review.bookmark'
        db.query(sql,callback)
    }

    addBookmark(bookmark, callback){
        var sql = `INSERT INTO bookmark (restid1,userid,restid2,restid3,restid4,restid5) VALUES (?,?,?,?,?,?)`
        db.query(
            sql,
            [bookmark.getRestid1(),bookmark.getUserid(),bookmark.getRestid2(),bookmark.getRestid3(),bookmark.getRestid4(),bookmark.getRestid5()
            ], callback)
        
    }
    updateBookmark(bookmark, callback){
        var sql = 'UPDATE bookmark SET restid1 = ?, restid2 = ?, restid3 = ?, restid4 = ?, restid5 = ? WHERE userid = ?'
        return db.query(sql, [bookmark.getRestid1(),bookmark.getRestid2(),bookmark.getRestid3(),bookmark.getRestid4(),bookmark.getRestid5() ,bookmark.getUserid()]
        , callback)
    }
    
    deleteBookmark(bookmarkId, callback){
        var sql = 'DELETE from bookmark WHERE userid = ?'
        return db.query(sql, [bookmarkId], callback)
    }
}

module.exports = BookmarkDB