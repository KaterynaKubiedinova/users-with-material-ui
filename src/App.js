import './App.css';
import { BrowserRouter } from "react-router-dom";
import HomePage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import UserCreatePage from './pages/UserCreate';
import UsersPage from './pages/Users';
import UserUpdatePage from './pages/UserUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/user/create' element={<UserCreatePage/>}/>
          <Route path='/user/:id' element={<UserUpdatePage/>}/>
			  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
