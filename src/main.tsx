import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Capstone from "./pages/Capstone.tsx";
import NotFound from "./pages/NotFound.tsx";
import {
  ABOUTME,
  CAPSTONE,
  CONTACT,
  HOME,
  INDEX,
  MUSIC,
  PROJECT,
} from "./constants/Slugs.ts";
import Projects from "./pages/Projects.tsx";
import Musics from "./pages/Musics.tsx";
import Contact from "./pages/Contact.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: INDEX,
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: HOME,
    element: <App />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: ABOUTME,
        element: <AboutMe />,
      },
      {
        path: CAPSTONE,
        element: <Capstone />,
      },
      {
        path: PROJECT,
        element: <Projects />,
      },
      {
        path: MUSIC,
        element: <Musics />,
      },
      {
        path: CONTACT,
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
