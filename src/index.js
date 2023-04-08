import React from 'react';
import ReactDOM from 'react-dom/client';
import { Globalstyle } from './Globalstyle';
import MyRoutes from './Routes/routes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyRoutes />
    <Globalstyle />
  </>
);


