const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
   firstname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minLength: [2, "firstname must contains atleast 2 characters"],
      validate: {
         validator: function (v) {
            return /^[ a-zA-Z-’]+$/.test(v);
         },
         message: "{VALUE} is not a valid firstname!",
      },
   },
   lastname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minLength: [2, "firstname must contains atleast 2 characters"],
      validate: {
         validator: function (v) {
            return /^[a-zA-Z_]{3,10}$/.test(v);
         },
         message: "{VALUE} is not a valid lastname!",
      },
   },
   address1: {
      type: String,
      required: true,
      validate: {
         validator: function (v) {
            return /^[a-zA-Z0-9\s,.'-]{3,}$/.test(v);
         },
         message: "{VALUE} is not a valid address!",
      },
   },
   address2: {
      type: String,
      required: true,
      validate: {
         validator: function (v) {
            return /^[a-zA-Z0-9\s,.'-]{3,}$/.test(v);
         },
         message: "{VALUE} is not a valid address2!",
      },
   },
   city: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      validate: {
         validator: function (v) {
            return /^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/.test(v);
         },
         message: "{VALUE} is not a valid city!",
      },
   },
   state: {
      type: String,
      required: true,
      uppercase: true,
      maxLength: [2, "maximum 2 characters"],
      validate: {
         validator: function (v) {
            return /^[a-zA-Z]{2}$/.test(v);
         },
         message: "{VALUE} is not a valid state!",
      },
   },
   zip: {
      type: Number,
      required: true,
      minLength: [2, "min 2 digits"],
      maxLength: [9, "max 9 digits"],
      validate: {
         validator: function (v) {
            return /^[0-9]{5,9}$/.test(v);
         },
         message:
            "{VALUE} is not a valid zip , zip must contains min 5 digits and max 9.",
      },
   },
   country: {
      type: String,
      uppercase: true,
      enum: ["US"],
      maxLength: [2, "only 2 characters"],
      validate: {
         validator: function (v) {
            return /^[us]{2}$/gim.test(v);
         },
         message: "{VALUE} is not a valid country!",
      },
   },
   date: { type: Date, default: Date.now },
});

const User = new mongoose.model("User", usersSchema);
module.exports = User;
