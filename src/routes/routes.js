import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home from "./home/home.component";
import Hotels from "./hotels/hotels.component";
import Login from "./login/login.component";
import Main from "./main.component";
import SignUp from "./sign-up/sign-up.component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/hotels" element={<Hotels />} />
    </Route>
  )
)

export default router;