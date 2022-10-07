import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Authorization from "./pages/authorization";
import {Ways} from "./pages/ways/ways";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path={Ways.Root} element={<Authorization/>}/>
      <Route path={Ways.Authorization} element={<Authorization/>}/>
      <Route path={Ways.Register} element={<Register/>}/>
      <Route path={Ways.Login} element={<Login/>}/>
    </Routes>
  )
}

export default App;
