let posts = [
    {id:1, title:'Post One'},
    {id:2, title:'Post Two'},
    {id:3, title:'Post Three'}
  ]

// @desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(posts.slice(0, limit))
    }
    res.status(200).json(posts)  
  }


// @desc Get single post
// @route GET /api/post/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    
    if (!post) {
        const error = new Error(`A post with id ${id} was not found`)
        error.status = 404
        return next(error)
    //   return res.status(404).json({msg: `A post with the id of ${id} was not found`})
    }
    res.status(200).json(post)
  }

// @desc Create a new post
// @route POST /api/posts
export const createPost = (req, res, next) => {
    const newPost = {
      id: posts.length + 1,
      title: req.body.title
    }

    if (!newPost.title){
        const error = new Error(`Please provide a title'`)
        error.status = 400
        return next(error)
        // return res.status(400).json({msg: 'Please provide a title'})
    }

    posts.push(newPost)
    res.status(201).json(newPost)
  }



// @desc Update a post
// @route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)
    
    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`)
        error.status = 404
        return next(error)
    //   return res.status(404).json({msg: `A post with the id of ${id} was not found`})
    }
    
    post.title = req.body.title
    res.status(200).json(post)
  }


// @desc Delete a post
// @route DELETE /api/postS/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const index = posts.findIndex((post) => post.id === id)
    
    if (index === -1) {
        const error = new Error(`A post with the id of ${id} was not found`)
        error.status = 404
        return next(error)
    //   return res.status(404).json({msg: `A post with the id of ${id} was not found`})
    }
    
    posts.splice(index, 1)
    res.status(200).json({msg: `Post with the id of ${id} has been deleted`})
  }