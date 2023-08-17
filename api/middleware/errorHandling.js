// error handling

function errorHandeling(err, req, res, next) {
    if(err) {
        let status = err.statusm || 500
        res.json({
            status,
            msg: "An error occurred; please try again later."
        })
    }
next()
}

module.exports = errorHandeling