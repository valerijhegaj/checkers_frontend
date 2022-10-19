import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import {Store} from "./redux/state";

let store = new Store()

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = (store) => {
  root.render(
    <App state={store.GetState()} dispatch={store.Dispatch.bind(store)}/>
  )
};

store.Subscribe(renderTree);
renderTree(store);

