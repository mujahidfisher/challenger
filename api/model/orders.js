// orders

class Orders{
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, userID, bookID, orderDate
        FROM Orders
        `
        db.query(query, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, userID, bookID, orderDate
        FROM Orders
        WHERE userID = ${req.params.id}
        `
        db.query(query, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    async placeOrders(req, res) {
        const data = req.body
        // Query
        const query = `
        INSERT INTO Orders
        SET ?;
        `
        
        const order = {
            orderID: data.orderID,
            userID: data.userID,
            bookID: data.bookID
        }

        db.query(query, [data], (err)=>{
            if(err) throw err
            // create token 
            let token = createToken(order)
            res.cookie("realOrder", token, {
                maxAge: 3600000,
                httpOnly: true
            })
            res.json({
                status: res.statusCode,
                msg: "You'r order is placed."
            })
        })
    }
    updateOrders(req, res) {
        const query = `
        UPDATE Orders
        SET ?
        WHERE orderID = ?
        `
        db.query(query, [req.body, req.params.id],
            (err) =>{
                if(err) throw err
                res.json({
                    status: res.statusCode, 
                    msg: "The order record was not found"
                })
            })
    }
    deleteOrders(req, res) {
        const query = `
        DELETE FROM Orders
        WHERE orderID = ${req.params.id}
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "An order has been calcelled"
            })
        })
    }

}

module.exports = Orders