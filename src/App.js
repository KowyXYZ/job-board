import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import NoAuth from './Components/User/NoAuth';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import Auth from './Components/User/Auth';
import Register from './Components/User/Register';
import JobSingleCard from './Components/Job/JobSingleCard';
const cookies = new Cookies()



function App() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home isAuth={isAuth}/>}/>
        <Route path='/user' element={isAuth ? <Auth setIsAuth={setIsAuth}/> : <NoAuth setIsAuth={setIsAuth}/>}/>
        <Route path='/user/register' element={<Register/>}/>
        <Route path='/jobs/:job' element={<JobSingleCard/>}/>
      </Route>
    )
  )
  
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
