//return the author object that has the matching ID.
function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id)
  return found; 
}

//return the book object that has the matching ID.
function findBookById(books, id) {
  const found = books.find((book) => book.id === id)
  return found; 
}

//return an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
function partitionBooksByBorrowedStatus(books) {
  const resultOne = books.filter((book) => book.borrows[0].returned === false);
  const resultTwo = books.filter((book) => book.borrows[0].returned === true);
  return [resultOne, resultTwo];
}

//return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array.
function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id)
    //each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
    account.returned = borrow.returned
    return account
  }).slice(0, 10)
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
