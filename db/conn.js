const { MongoClient } = require('mongodb')

const uri = "mongodb://127.0.0.1:27017/segundobanco"

const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect()
        console.log('Banco conectado')
    }catch(err){
        console.log(err)
        console.log('tá dando erro paizão')
    }
}

run()

module.exports = client