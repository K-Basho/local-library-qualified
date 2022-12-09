//return the account object that has the matching ID.
function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}


//return a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) => lastNameA.name.last < lastNameB.name.last ? -1 : 1);
  return accounts;
}

//return a number that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const idCount = book.borrows.filter(borrow => borrow.id === account.id).length
    return total + idCount
  }, 0)
}

//return an array of book objects, including author information, that represents all books currently checked out by the given account.
function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  const booksPossessedByAccount = booksCheckedOut.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
 
    return { ...book, author }; 
  });
  return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
