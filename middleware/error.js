const errHandler = (err, req, res, next) => {

    // res.status(404).json({msg: 'Error'})
    res.status(err.status || 500).json({msg: err.message || 'Internal Server Error'})

    // Log error
    console.error(err.stack)
}

export default errHandler