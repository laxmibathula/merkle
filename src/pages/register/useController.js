import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useController = (validate) => {
   let history = useHistory();

   const [details, setDetails] = useState({
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "US",
   });

   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   const onChangeHandler = (e) => {
      var { name, value } = e.target;
      setDetails({
         ...details,
         [name]: value,
      });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      setErrors(validate(details));
      setIsSubmitting(true);
   };

   useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
         axios({
            method: "post",
            url: "/register",
            data: { details },
         })
            .then((response) => {
               if (response.status === 200) {
                  return history.push("/confirmation");
               }
            })
            .catch((error) => {
               console.log(error);
            });
      }
   }, [errors]);

   return { submitHandler, onChangeHandler, details, errors };
};

export default useController;
