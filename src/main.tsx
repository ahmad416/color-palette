import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import App from './App';
import {PalettePage} from "./pages/palette.page";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <BrowserRouter>
              <Routes>
                  <Route element={<App/>} path='/'/>
                  <Route element={<PalettePage/>} path='/palette/:paletteId' />
              </Routes>
          </BrowserRouter>
  </React.StrictMode>
)
