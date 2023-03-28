import React, { Component } from "react";
import "./book-list.css";

import { connect } from "react-redux";
import compose from "../../utils/compose";
import WithBookstoreService from "../hoc/With-bookstore-service";
import BookListItem from "../book-list-item/book-list-item";
import { booksLoaded, booksRequested } from "../../actions";
import Spinner from "../spinner/Spinner";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    console.log(this.props);
    booksRequested();
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;
    if (loading) {
      return <Spinner />;
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

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
