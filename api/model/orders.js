// orders

const db = require("../config");
class Orders{
    fetchOrders(req, res) {
        const query = `
            SELECT orderID, userID, bookID, orderDate
            FROM Orders
            `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }
      fetchOrders(req, res) {
        const id = req.params.id;
        const query = `
            SELECT orderID, userID, bookID, orderDate
            FROM Orders
            WHERE orderID = ?;
            `;
        db.query(query, [id], (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }
      register(req, res) {
        const data = req.body;
        // Query
        const query = `
            INSERT INTO Orders
            SET ?;
            `;
        db.query(query, [data], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "New Orders has been placed.",
          });
        });
      }
      updateOrders(req, res) {
        const query = `
            UPDATE Orders
            SET ?
            WHERE orderID = ?
            `;
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The order has been updated.",
          });
        });
      }
      deleteOrders(req, res) {
        const query = `
            DELETE FROM Orders
            WHERE orderID = ${req.params.id}
            `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "The order was deleted",
          });
        });
      }

}

module.exports = Orders