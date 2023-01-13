const AccountDB = require('../models/AccountDB')
const Account = require('../models/Account')

var accDB = new AccountDB()

function getAllAccount(request,respond){
    accDB.getAllAccount(function(error,result){
        if(error){
            respond.json(error)
        }
        else{
            respond.json(result)
        }
    })
}

function addAccount(request,respond){
    var now = new Date().toISOString().replace('T',' ').substring(0,19)
    var acc = new Account(null,request.body.username,request.body.password,
        request.body.email,now.toString(),request.body.description,request.body.image)
    accDB.addAccount(acc,function(error,result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

function updateAccount(request, respond){
    var acc = new Account(parseInt(request.params.id),request.body.username,request.body.password,
    request.body.email,request.body.dateCreated,request.body.description,request.body.image)
    accDB.updateAccount(acc, function(error, result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

function deleteAccount(request,respond){
    var accountId = request.params.id
    accDB.deleteAccount(accountId, function(error,result){
        if (error){
            respond.json(error)
        }else{
            respond.json(result)
        }
    })
}

module.exports = {getAllAccount, addAccount, updateAccount,deleteAccount}