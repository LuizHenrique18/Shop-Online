const Product = require('../models/Product')

module.exports = class ProductsController {
    //Show the products - Home Page
    static async produtos (req,res){
        const products = await Product.getProducts()

        res.render('products/products', {products})
    }

    // Creating the product to the view
    static createProduct(req,res){
        res.render('products/createProduct')
    }

    //Post - Creating the product
    static async creatingProduct(req,res){

        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description


        console.log(name, image, price, description)

        const product = new Product(name, image, price, description)

        product.save()
        res.redirect('/')
    }

    //Showing the only item in the view
    static async getProductId(req,res){
        const id = req.params.id
        const produto = await Product.getProductId(id)

        res.render('products/details',{produto})
    }

    //Delete the product
    static async deleteProduct(req , res){
        const id = req.params.id
        try{
            Product.deleteProduct(id)
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }

    //Edit the product
    static async editProduct(req,res){
        const id = req.params.id
        const product = await Product.getProductId(id)

        res.render('products/editProduct', {product})
    }

    //Post - editing the product
    static async editingProduct(req,res){
        
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image
        const id = req.body.id

        const product = new Product(name, image, price, description)
       
        await product.editProduct(id)


        res.redirect('/')
    }
}