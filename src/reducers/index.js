const initialState = {
  books: [
    { id: 1, title: "Book1", author: "Author1" },
    { id: 2, title: "Book2", author: "Author2" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return { books: action.payload };
    default:
      return state;
  }
};

export default reducer;
