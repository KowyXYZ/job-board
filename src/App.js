import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import NoAuth from './Components/User/NoAuth';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/user' element={<NoAuth/>}/>
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
