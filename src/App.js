import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from './context/AuthContext'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Users from './Pages/Users'
import PrivateRoute from './PrivateRoute'
import { QueryClientProvider, QueryClient } from 'react-query'
import Resources from './Pages/Resources'
import Navbar from './components/Navbar'


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthContext>
          <ToastContainer />
          <div className='container'>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Register} />
          </div>
          <Route exact path='/'>
            <Redirect to='/users' />
          </Route>
          <PrivateRoute path='/' component={Navbar} />
          <PrivateRoute exact path='/users' component={Users} />
          <PrivateRoute exact path='/resources' component={Resources} />
        </AuthContext>
      </Router>
    </QueryClientProvider>

  );
}

export default App;
