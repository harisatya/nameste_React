import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Shimmer from "./Shimmer";
const Header = lazy(() => import("./Header"));
//import Header from "./Header";
const Body = lazy(() => import("./Body"));
//import Body from "./Body";
const About = lazy(() => import("./About"));
//import About from "./About";
const Error = lazy(() => import("./Error"));
//import Error from "./Error";
const Contact = lazy(() => import("./Contact"));
//import Contact from "./Contact";
const Footer = lazy(() => import("./Footer"));
//import Footer from "./Footer";
const ResMenu = lazy(() => import("./ResMenu"));
//import ResMenu from "./ResMenu";
const Cart = lazy(() => import("./Cart"));
//import Cart from "./Cart";
const Profile = lazy(() => import("./Profile"));
//import Profile from "./Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/*
// React.createElement => Object => HTML(DOM)
const heading = React.createElement(
  "h1",
  { key: "h1" },
  "Hello Hari you are in react CDN"
);

const heading2 = React.createElement(
  "h2",
  { key: "h2" },
  "Hello Hari you are in heading 2"
);

React element are wtitten like variable with jsx attached example 
 const heading4 = <h1>I am in heading 3</h1>;
component is written with function attached with JSX example
 const Heading3 = () => <h1>I am in heading 3</h1>;

JSX Uses Babel for compiliation.
Babel is next gen javaScript compiler.
JSX => React.createElement => Object => HTML(DOM)
const container = React.createElement("div", {}, [heading, heading2]);
*/

const AppLayout = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      {/* <Contact />
      <Body /> */}
      <Outlet />

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <Suspense>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <Suspense>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",

        element: (
          <Suspense>
            <ResMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
