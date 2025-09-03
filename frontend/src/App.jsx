import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './components/pages/Home.jsx';
import Signin from './components/pages/Signin.jsx';
import Signup from './components/pages/Signup.jsx';
import Dashboard from './components/user/Dashboard.jsx';

import ProtectRouter from './components/user/ProtectRouter.jsx';

const App =() =>{
  return (
    <Router>
      <Routes>
        {/* Public routes here */}
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={
            <Signin />
          } />
        <Route path='/signup' element={
          <Signup />
          } />

        {/* Protected routes here */}
        <Route path='/dashboard' element={
          <ProtectRouter>
            <Dashboard />
          </ProtectRouter>
          } />
      </Routes>
      <Toaster 
        position="bottom-center"
        reverseOrder={false}
      />
    </Router>
  )
}

export default App;