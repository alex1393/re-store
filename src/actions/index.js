const booksLoaded = (newBooks) => {
  return {
    action: "BOOKS_LOADED",
    payload: newBooks,
  };
};

export { booksLoaded };
