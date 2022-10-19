import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import state, {subscribe, updateCreateUser, updateLogin} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = (state) => {
  root.render(
    <App state={state} updateLogin={updateLogin} updateCreateUser={updateCreateUser}/>
  )
};

renderTree(state)
subscribe(renderTree)

