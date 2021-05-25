import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Confirmation = () => {
   let history = useHistory();
   const repot = () => {
      history.push("/registered-user-report");
   };

   return (
      <div className='confirm_container'>
         <h1 className='page-title'>Confirmation Page</h1>
         <h3>You are succesfully registerd.</h3>
         <button className='confirm-button' onClick={repot}>
            Click to view User-Report
         </button>
      </div>
   );
};

export default Confirmation;
