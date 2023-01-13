class Account {
    constructor(id,username,password,email,dateCreated,description,image){
        this.id = id,
        this.username = username,
        this.password = password,
        this.email = email,
        this.dateCreated = dateCreated,
        this.description = description,
        this.image = image
    }

    getId(){
        return this.id
    }
    getUsername(){
        return this.username
    }
    getPassword(){
        return this.password
    }
    getEmail(){
        return this.email
    }
    getDateCreated(){
        return this.dateCreated
    }
    getDescription(){
        return this.description
    }
    getImage(){
        return this.image
    }

    setId(id){
        this.id = id
    }
    setUsername(username){
        this.username = username
    }
    setPassword(password){
        this.password = password
    }
    setEmail(email){
        this.email = email
    }
    setDateCreated(dateCreated){
        this.dateCreated = dateCreated
    }
    setDecription(description){
        this.description = description
    }
    setImage(image){
        this.image = image
    }
}

module.exports = Account