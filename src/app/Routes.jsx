import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/Home/HomePage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "courses", element: <div>Courses Page</div> },
      { path: "contact", element: <div>Contact Page</div> },
      { path: "subscription", element: <div>Subscription Page</div> },
    ]
  },
])
