const conn = require('../db/conn')
const { ObjectId } = require('mongodb')
class Product {

    constructor(name, image, price, description){
        this.name = name
        this.image = image
        this.price = price
        this.description = description
    }

    save(){
        const product = conn.db().collection('products').insertOne({
            name:this.name,
            image:this.image,
            price:this.price,
            description:this.description
        })

        return product
    }

    static getProducts(){
        const products = conn.db().collection('products').find().toArray() 
    
        return products
    }

    static async getProductId(id){
        const idUser = new ObjectId(id) // user id codificate, without the "objectId", only id

        const produto = await conn
        .db()
        .collection('products')
        .findOne({ _id:  idUser})

        return produto
    }

    static async deleteProduct(id){
        const idUser = new ObjectId(id) // user id codificate, without the "objectId", only id

        await conn
        .db()
        .collection('products')
        .deleteOne({_id:idUser})

        return
    }

    editProduct(id){
        const idUser = new ObjectId(id) // user id codificate, without the "objectId", only id
        
        conn
        .db()
        .collection('products')
        .updateOne({_id:idUser}, {$set:this})

        return 
    }

}

module.exports = Product