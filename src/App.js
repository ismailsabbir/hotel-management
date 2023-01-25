import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../src/Layout/Main";
import Home from "./Component/Home/Home";
import SignupRegister from "./Component/SignupRegister/SignupRegister";
import SigninLogin from "./Component/SigninLogin/SigninLogin";
import Service from "./Component/Service/Service";
import News from "./Component/News/News";
import PrivetRoute from "./Routes/PrivetRoute";
// import Book from "./Component/Book/Book";
import Bookconfram from "./Component/Bookconfram/Bookconfram";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/signup",
          element: <SignupRegister></SignupRegister>,
        },
        {
          path: "/login",
          element: <SigninLogin></SigninLogin>,
        },
        {
          path: "/service",
          element: <Service></Service>,
        },
        {
          path: "/news",
          element: (
            <PrivetRoute>
              <News></News>
            </PrivetRoute>
          ),
        },
        {
          path: "/book",
          element: (
            <PrivetRoute>
              <Bookconfram></Bookconfram>
            </PrivetRoute>
          ),
        },
        {
          path: "*",
          element: <div>page not found</div>,
        },
      ],
    },
  ]);
  return (
    <div className="main-container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
