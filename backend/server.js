const path = require('path')
const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
// const mongoose = require("mongoose")

connectDB()

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
app.use('/api/users', require('./routes/userRoutes'))

// For Deploy
// Serve frontend
if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res)=> res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Backend started on port ${port}`)})