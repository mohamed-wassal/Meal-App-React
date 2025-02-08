import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Meals from "./components/Meals/Meals"
import Ingredients from "./components/Ingredients/Ingredients"
import Area from "./components/Area/Area"
import Mealdetails from "./components/Mealdetails/Mealdetails"
import NotFound from "./components/NotFound/NotFound"
import "@fortawesome/fontawesome-free/css/all.min.css"

function App() {
  
const routes= createHashRouter([
  {path: "/", element: <Layout />, children: [
    {index: true, element: <Meals/>},
    {path: "area", element: <Area/>},
    {path: "ingredients", element: <Ingredients/>},
    {path: "mealdetails/:id", element: <Mealdetails/>},
    {path: "*", element: <NotFound/>}

  ]}])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
