import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import UserReport from "./pages/UserReport";
import "./index.css";

ReactDOM.render(
   <BrowserRouter>
      <div className='app'>
         <h1>Welcome To Markle</h1>
      </div>
      <Switch>
         <Route exact path='/' component={Register} />
         <Route path='/confirmation' component={Confirmation} />
         <Route path='/registered-user-report' component={UserReport} />
         <Route component={Error} />
      </Switch>
   </BrowserRouter>,
   document.getElementById("root")
);
