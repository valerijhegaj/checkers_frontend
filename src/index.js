import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, {updateCreateUser, updateLogin} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = () => {root.render(
      <App state={state} updateLogin={updateLogin} updateCreateUser={updateCreateUser}/>
)};

renderTree();

export default renderTree;
