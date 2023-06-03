import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./LayOut/Main"
import Home from "./Pages/Home"


function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
