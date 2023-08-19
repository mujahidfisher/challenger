// book authors

const db = require("../config");
class BookAuthor {
  fetchBookAuthor(req, res) {
    const query = `
        SELECT id, authorName, authorSurname, bookID
        FROM BookAuthor
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchBookAuthor(req, res) {
    const id = req.params.id;
    const query = `
        SELECT id, authorName, authorSurname, bookID
        FROM BookAuthor
        WHERE id = ?;
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
                INSERT INTO BookAuthor
                SET ?;
                `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New Author has been added to a book.",
      });
    });
  }
  updateBookAuthor(req, res) {
    const query = `
                UPDATE BookAuthor
                SET ?
                WHERE id = ?
                `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The Author from the book has been updated.",
      });
    });
  }
  deleteBookAuthor(req, res) {
    const query = `
                DELETE FROM BookAuthor
                WHERE id = ${req.params.id}
                `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "An Author of a book was deleted",
      });
    });
  }
}

module.exports = BookAuthor;
