//Bookmark route

class Bookmark {
    constructor(restid1, userid, restid2, restid3, restid4, restid5){
        this.restid1 = restid1,
        this.userid = userid,
        this.restid2 = restid2,
        this.restid3 = restid3,
        this.restid4 = restid4,
        this.restid5 = restid5
    }

    getRestid1(){
        return this.restid1
    }
    getUserid(){
        return this.userid
    }
    getRestid2(){
        return this.restid2
    }
    getRestid3(){
        return this.restid3
    }
    getRestid4(){
        return this.restid4
    }

    getRestid5(){
        return this.restid5
    }

    setRestid1(restid1){
        this.restid1 = restid1
    }
    setUserid(userid){
        this.userid = userid
    }
    setRestid2(restid2){
        this.restid2 = restid2
    }
    setRestid3(restid3){
        this.restid3 = restid3
    }
    setRestid4(restid4){
        this.restid4 = restid4
    }
    setRestid5(restid5){
        this.restid5 = restid5
    }

}

module.exports = Bookmark