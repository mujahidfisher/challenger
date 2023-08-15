// books

const db = require("../config");
class Books {
  fetchBooks(req, res) {
    const query = `
        SELECT bookID, bookTitle, category, bookUrl
        FROM Books
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchBook(req, res) {
    const id = req.params.id;
    const query = `
        SELECT bookID, bookTitle, category, bookUrl
        FROM Books
        WHERE bookID = ?;
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
        INSERT INTO Books
        SET ?;
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New Book has been added.",
      });
    });
  }
  updateBooks(req, res) {
    const query = `
        UPDATE Books
        SET ?
        WHERE bookID = ?
        `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The book record has been updated.",
      });
    });
  }
  deleteBooks(req, res) {
    const query = `
        DELETE FROM Books
        WHERE bookID = ${req.params.id}
        `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A book was deleted",
      });
    });
  }
}

module.exports = Books;
