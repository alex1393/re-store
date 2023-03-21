import React from "react";
import "./app.css";
import WithBookstoreService from "../hoc/With-bookstore-service";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBook());
  return <h1>Hello world</h1>;
};

export default WithBookstoreService()(App);
