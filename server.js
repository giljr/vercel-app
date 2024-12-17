import express from 'express'
// const express = require('express')
import path from 'path'
//const path = require('path')
import {fileURLToPath} from 'url'
import posts from './routes/posts.js'
// const posts = require('./routes/posts')
import logger from './middleware/logger.js'
import errHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'
import dotenv from 'dotenv'
// require('dotenv').config()

const PORT = process.env.PORT || 4000

// Get the Directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

// Body parser middleware 
// (support raw and x-www-form-urlencoded)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware: Logger
app.use(logger)

// setup static folder
app.use(express.static(path.join(__dirname,'public')))

// Routes
app.use('/api/posts', posts)

// Error handling middleware
app.use(notFound)
app.use(errHandler)

// Error handling middleware
// app.use(notFound)

// // Catch all other routes and return 404
// app.use((req, res, next) => {
//   const error = new Error('Not Found')
//   error.status = 404
//   next(error)
// })



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

export default app
// module.exports = app