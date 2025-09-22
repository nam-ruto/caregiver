import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import FindNanny from "../pages/findnanny/FindNanny";
import Onboarding from "../pages/findnanny/Onboarding";

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/find-nanny", element: <FindNanny /> },
      { path: "/contact", element: <Contact /> },
      { path: "/onboarding", element: <Onboarding /> },
    ],
  },
]);
