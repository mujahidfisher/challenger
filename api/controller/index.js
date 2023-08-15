// Router

const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
// Import all model's objects
const { users } = require("../model");
const { books } = require("../model");
const { BookAuthor } = require("../model")

// BooksAuthor router
routes.get("/BookAuthor", (req, res)=>{
  BookAuthor.fetchBookAuthor(req, res);
})
routes.get("/BookAuthor/:id",(req, res)=>{
    BookAuthor.fetchBookAuthor(req, res)
})
routes.post("/BookAuthorRegister", bodyParser.json(), (req, res)=>{
    BookAuthor.register(req, res)
})
routes.put("/BookAuthor/:id", bodyParser.json(), (req, res)=>{
    BookAuthor.updateBookAuthor(req, res)
})
routes.patch("/BookAuthor/:id", bodyParser.json(), (req, res) => {
    BookAuthor.updateBookAuthor(req, res);
  });
  routes.delete("/BookAuthor/:id", (req, res) => {
    BookAuthor.deleteBookAuthor(req, res);
  });

//Books router
routes.get("/books", (req, res) => {
  books.fetchBooks(req, res);
});
routes.get("/book/:id", (req, res) => {
  books.fetchBook(req, res);
});
routes.post("/booksRegister", bodyParser.json(), (req, res)=>{
  books.register(req, res);
});
routes.put("/book/:id", bodyParser.json(), (req, res) => {
  books.updateBooks(req, res);
});
routes.patch("/book/:id", bodyParser.json(), (req, res) => {
  books.updateBooks(req, res);
});
routes.delete("/book/:id", (req, res) => {
  books.deleteBooks(req, res);
});

// User's router
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUsers(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

module.exports = {
  express,
  routes,
};
