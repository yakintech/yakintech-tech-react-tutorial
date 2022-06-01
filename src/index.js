import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import CartProvider from './store/cartContext';
import todos from './store/reducers/todo.reducers';


const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(todos)

root.render(
  <Provider store={store}>
    <CartProvider>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </CartProvider>
  </Provider>
);
