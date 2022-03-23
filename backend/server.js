const express = require("express");
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
// const mongoose = require("mongoose")

const app = express();

// app.get('/api/goals', (req, res) => {
//   // res.send('Get goals')
//   // res.json({message: 'Get goals'})
//   res.status(200).json({message: 'Get goals'})
// })

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)


app.listen(port, () => {
  console.log(`Backend started on port ${port}`)})