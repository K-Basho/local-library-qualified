//return a number that represents the number of book objects inside of the array.
function getTotalBooksCount(books) {
  let totalBooks = 0; 
    books.forEach((book) => {
      totalBooks += 1; 
    })
    return totalBooks; 
}

//return a number that represents the number of account objects inside of the array.
function getTotalAccountsCount(accounts) {
  let totalAccounts = 0; 
  accounts.forEach((account) => {
    totalAccounts +=1;
  })
  return totalAccounts; 
}

//return a number that represents the number of books that are currently checked out of the library.
function getBooksBorrowedCount(books) {
  //If the transaction says the book has not been returned, the book is currently being borrowed.
  result = books.filter((book) => book.borrows[0].returned === false)
  return result.length; 
}


//return an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
function getMostCommonGenres(books) {
  const newBooksObject = books.reduce((newBooksObject, {genre}) => {
    newBooksObject[genre] ? newBooksObject[genre]++ : newBooksObject[genre] = 1
    return newBooksObject
  },{})
  
  return Object.entries(newBooksObject).map(([name, count]) => (
  {name, count})).sort((genreA,genreB) => genreB.count - genreA.count).slice(0,5)
}


//return an array containing five objects or fewer that represents the most popular books in the library. 
function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      //Each object in the returned array has two keys: name, count
      name: book.title,
      count: book.borrows.length
    }
  }).sort((bookA, bookB) => bookB.count - bookA.count).slice(0,5)
}


//return an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most.
function getMostPopularAuthors(books, authors) {
  const topAuthorsArray = [];
  authors.forEach((author) => {
    const byThisAuthor = books.filter((book) => book.authorId === author.id);
    let totalBorrows = 0;
    byThisAuthor.forEach((book) => (totalBorrows += book.borrows.length));
    topAuthorsArray.push({
      name: author.name.first + " " + author.name.last,
      count: totalBorrows,
    });
  });
  //sort array in descending order
 topAuthorsArray.sort((a, b) => (a.count < b.count ? 1 : -1));
  topAuthorsArray.length = 5;
  return topAuthorsArray;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
