import React, { Component } from "react";
import "./book-list.css";

import { connect } from "react-redux";
import compose from "../../utils/compose";
import WithBookstoreService from "../hoc/With-bookstore-service";
import BookListItem from "../book-list-item/book-list-item";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/Error-indicator";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested, booksError } =
      this.props;

    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
