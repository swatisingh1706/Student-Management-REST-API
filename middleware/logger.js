function logger(req,res,next){

    console.log('this is logger middleware')
    console.log(req.method)
    console.log(req.url)

    next()
}

export default logger