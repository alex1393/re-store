import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app/App";
import ErrorBoundary from "./components/error-boundary/Error-boundary";
import { BookstoreServiceConsumer } from "./components/bookstore-service-context/Bookstore-service-context";
import { BookstoreServiceProvider } from "./components/bookstore-service-context/Bookstore-service-context";

import store from "./store";

const bookstoreService = new bookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
