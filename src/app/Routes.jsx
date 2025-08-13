import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "../pages/Home/HomePage"
import Subscription from "../pages/Subscription"
import Profile from "../pages/Profile"

// Create placeholder components for other routes
const CoursesPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-3xl font-bold text-gray-900">Courses Page - Coming Soon</h1>
  </div>
)

const ContactPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-3xl font-bold text-gray-900">Contact Page - Coming Soon</h1>
  </div>
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
])
