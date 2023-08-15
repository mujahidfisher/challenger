// import all models

const Users = require("./users")
const Orders = require("./orders")
const Books = require("./books")
const BookAuthor = require("./booksAuthor")

// export all objects

module.exports = {
    users: new Users(),
    books: new Books()
}