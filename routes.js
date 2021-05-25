const express = require("express");
const router = express.Router();
const users = require("./users-schema");

router.post("/register", async (req, res) => {
   const user = new users({
      firstname: req.body.details.firstName,
      lastname: req.body.details.lastName,
      address1: req.body.details.address1,
      address2: req.body.details.address2,
      city: req.body.details.city,
      state: req.body.details.state,
      zip: req.body.details.zip,
      country: req.body.details.country,
   });

   try {
      const result = await user.save();
      res.status(200).send(result);
   } catch (error) {
      res.status(400).send(error);
   }
});

router.get("/user-repot", async (req, res) => {
   try {
      const repot = await users.find().sort({ date: -1 });
      res.status(200).send(repot);
   } catch (error) {
      res.status(400).send(error);
   }
});

module.exports = router;
