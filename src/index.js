import React from "react";
import  {createRoot}  from 'react-dom/client';
import App from "./App";
import GlobalStyle from "./globalStyle";


const root = createRoot(document.getElementById('root'));
root.render(<App/>,)
root.render(<GlobalStyle/>)



