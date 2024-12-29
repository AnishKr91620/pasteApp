import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'
import Home from './components/Home'



const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Navbar /> 
        <Home />       
      </div>
    },
    {
      path:'/pastes',
      element:
      <div>
        <Navbar />
        <Pastes />
      </div>
    },
    {
      path:'/pastes/:id',
      element:
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    },
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
