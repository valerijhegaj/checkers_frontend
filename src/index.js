import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./usingRedux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = (store) => {
  root.render(
    <App state={store.GetState()} dispatch={store.Dispatch.bind(store)}/>
  )
};

store.Subscribe(renderTree);
console.log(store)
renderTree(store);

