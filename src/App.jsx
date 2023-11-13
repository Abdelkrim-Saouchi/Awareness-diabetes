import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Complications from "./pages/Complications";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Prevention from "./pages/Prevention";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "intro",
        element: <Intro />,
      },
      {
        path: "complications",
        element: <Complications />,
      },
      {
        path: "prevention",
        element: <Prevention />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
