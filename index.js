require('./db')
const express=require('express')
const rest=require('./routings')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())


app.use('/rest',rest)

app.listen(8000);