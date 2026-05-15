import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home
from "../pages/home/Home";

import Dashboard
from "../pages/dashboard/Dashboard";

import Register 
from "../pages/register/Register";

import List
from "../pages/list/List";

import Detail
from "../pages/detail/Detail";

import Settings
from "../pages/settings/Settings";

export function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/list"
          element={<List />}
        />

        <Route
          path="/detail/:id"
          element={<Detail />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
  );
}