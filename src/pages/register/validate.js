import validator from "validator";

const validateInfo = (values) => {
   let errors = {};

   if (validator.isEmpty(values.firstName)) {
      errors.firstName = "Username is Empty";
   } else if (!validator.matches(values.firstName, "^[ a-zA-Z-’]+$")) {
      errors.firstName = "Username not Valid";
   }

   if (validator.isEmpty(values.lastName)) {
      errors.lastName = "Username is Empty";
   } else if (!validator.matches(values.lastName, "^[a-zA-Z_.-]{3,10}$")) {
      errors.lastName = "Username not Valid";
   }

   if (!values.address1) {
      errors.address1 = "address1 is empty";
   } else if (!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(values.address1)) {
      errors.address1 = " address1 is invalid";
   }

   if (!values.address2) {
      errors.address2 = "address2  is empty";
   } else if (!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(values.address2)) {
      errors.address2 = " address2 is invalid";
   }

   if (!values.city) {
      errors.city = "city  is empty";
   } else if (!/^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/gim.test(values.city)) {
      errors.city = " city is invalid";
   }

   if (!values.state) {
      errors.state = "state  is empty";
   } else if (!/^[a-zA-Z]{2}$/gm.test(values.state)) {
      errors.state = " state is invalid";
   }

   if (!values.zip) {
      errors.zip = "zip  is empty";
   } else if (!/^[0-9]{5,9}$/.test(values.zip)) {
      errors.zip = " zip is invalid";
   }

   if (!values.country) {
      errors.country = "country  is empty";
   } else if (!/^[us]{2}$/gim.test(values.country)) {
      errors.country = " country is invalid";
   }

   return errors;
};

export default validateInfo;
