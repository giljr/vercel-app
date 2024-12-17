import express from 'express' 
// const express = require('express')
import {getPosts, getPost, createPost, updatePost, deletePost} from '../controllers/postController.js'

const router = express.Router()

// Middleware: Logger
// GET http://localhost:4000/api/posts
//   const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
//     next()
//   }
  
  // Get all posts
  router.get('/', getPosts)
  
  // Get single post
  router.get('/:id', getPost)

  // Create a post
  router.post('/', createPost)

  // Update a post
  router.put('/:id', updatePost)

  // Delete a post  
  router.delete('/:id', deletePost)


export default router
// module.exports = router