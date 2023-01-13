var db = require('../db-con')

class AccountDB{
    getAllAccount(callback){
        var sql = 'SELECT * FROM restaurant_review.account'
        db.query(sql, callback)
    }

    addAccount(account, callback){
        var sql = 'INSERT INTO account (username, password, email, dateCreated, description, image) VALUES (?,?,?,?,?,?)'
        db.query(
            sql,
            [account.getUsername(),account.getPassword(),account.getEmail(),account.getDateCreated(),
                account.getDescription(),account.getImage()], callback
        )
    }

    updateAccount(account, callback){
        var sql = 'UPDATE account SET username = ?, password = ?, email = ?, description = ?, image = ? WHERE _id = ?'
        db.query(
            sql,
            [account.getUsername(),account.getPassword(),account.getEmail(),
                account.getDescription(),account.getImage(), account.getId()], callback
            )
    }

    deleteAccount(accountId, callback){
        var sql = 'DELETE from account WHERE _id = ?'
        return db.query(sql, [accountId],callback)
    }

}

module.exports = AccountDB