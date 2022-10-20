import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./usingRedux/store";
import {Provider} from "./redux/react-redux/Provider";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = (store) => {
  root.render(
    <Provider value={store}>
      <App />
    </Provider>
  )
}

window.Disable = store.Subscribe(() => {
  renderTree(store)
})

window.Enable = () => {
  store.Subscribe(() => {renderTree(store)})
}

renderTree(store)

