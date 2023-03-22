import React, { Component } from "react";
import "./book-list";

import { connect } from "react-redux";
import WithBookstoreService from "../hoc/With-bookstore-service";
import BookListItem from "../book-list-item/book-list-item";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book}></BookListItem>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booksLoaded: (newBooks) => {
      dispatch({ type: "BOOKS_LOADED", payload: newBooks });
    },
  };
};

export default WithBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
