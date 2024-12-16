const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 4000


// setup static folder
// app.use(express.static(path.join(__dirname,'public')))

let posts = [
  {id:1, title:'Post One'},
  {id:2, title:'Post Two'},
  {id:3, title:'Post Three'}
]

// Get all posts
app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit)
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit))
  }
  res.status(200).json(posts)  
})

// Get single post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const post = posts.find((post)=> post.id === id)
  
  if (!post) {
    return res.status(404).json({msg: `A post with the id of ${id} was not found`})
  }
  res.status(200).json(post)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

module.exports = app