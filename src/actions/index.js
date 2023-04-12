const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

export const bookAddedToCard = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CARD",
    payload: bookId,
  };
};

export const bookRemovedFromCard = (bookId) => {
  return {
    type: "BOOK_REMOVED_FROM_CARD",
    payload: bookId,
  };
};

export const allBooksRemovedFromCard = (bookId) => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CARD",
    payload: bookId,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => {
      dispatch(booksLoaded(data));
    })
    .catch((error) => {
      dispatch(booksError(error));
    });
};

export { fetchBooks };
