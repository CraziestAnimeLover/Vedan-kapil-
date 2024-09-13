
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import Companies from './components/admin/Companies'
import JobDescription from './components/JobDescription'



const approuter = createBrowserRouter([
  { path: '/',
    element: <Home/>
   },
  { path: '/login', 
    element: <Login/>
  },
  { path: '/register', 
    element: <Signup/>
   },
   { path: '/jobs', 
    element: <Jobs/>
   },
   { path: '/description/:id', 
    element: <JobDescription/>
   },
   { path: '/browse', 
    element: <Browse/>
   },
   { path: '/profile', 
    element: <Profile/>
   },


   { path: '/admin/companies', 
    element: <Companies/>
   },
   
  ])

function App() {
  

  return (
    <>
    <RouterProvider router={approuter}/>
    
    </>
     
  )
}

export default App
