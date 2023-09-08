import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './pages/main/Main.jsx'
import Login from './pages/login/Login.jsx'
import User from './pages/user/User.jsx'
import {Route, Routes} from 'react-router-dom'
import PrivateRoute from './components/hoc/PrivateRoute'

function App() {

  return (
    <div className="content__container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
