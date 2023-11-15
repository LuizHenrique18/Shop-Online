const exp = require('constants')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

//Router
const productsRouter = require('./routes/productsRouter')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Call routers
app.use('/', productsRouter)



app.listen(3000)
