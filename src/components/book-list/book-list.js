import React, { Component } from "react";
import "./book-list";

import { connect } from "react-redux";

import BookListItem from "../book-list-item/book-list-item";

class BookList extends Component {
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

export default connect(mapStateToProps)(BookList);
