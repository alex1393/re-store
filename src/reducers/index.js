const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 240,
};

const updateCartItems = (cartItems, item, idx) => {
  console.log(idx);
  if (idx < 0) {
    console.log(1);
    return [...cartItems, item];
  } else {
    console.log(2);
    return [...cartItems.slice(0, idx), item, ...cartItems.slice(0, idx + 1)];
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case "BOOK_ADDED_TO_CARD":
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];

      let newItem;
      if (item) {
        console.log(1);
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price,
        };
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price,
        };
      }

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      };

    default:
      return state;
  }
};

export default reducer;
