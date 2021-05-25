import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

const RegisteredUserReport = () => {
   const [repot, setRepot] = useState([]);

   useEffect(() => {
      axios({
         method: "get",
         url: "/user-repot",
      })
         .then((response) => {
            setRepot(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   return (
      <>
         <div className='t_main'>
            <h1 className='heading'> RegisteredUserReport</h1>
            {repot.length ? (
               <table className='table_container'>
                  <thead className='t_head'>
                     <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address1</th>
                        <th>Address2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Country</th>
                        <th>Date</th>
                     </tr>
                  </thead>
                  <tbody className='t_body'>
                     {repot.map((obj, index) => {
                        return (
                           <tr key={index}>
                              {
                                 <>
                                    <td className='f_name'>{obj.firstname}</td>
                                    <td>{obj.lastname}</td>
                                    <td>{obj.address1}</td>
                                    <td>{obj.address2}</td>
                                    <td>{obj.city}</td>
                                    <td>{obj.state}</td>
                                    <td>{obj.zip}</td>
                                    <td>{obj.country}</td>
                                    <td>{obj.date}</td>
                                 </>
                              }
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            ) : (
               ""
            )}
         </div>
      </>
   );
};

export default RegisteredUserReport;
