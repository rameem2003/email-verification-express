import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Layouts/Rootlayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
