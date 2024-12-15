
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<HomePage></HomePage>}/>
      <Route path = "/register" element = {<RegisterPage></RegisterPage>}/>
      <Route path = "/login" element = {<LoginPage></LoginPage>}/>
      
      
        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
