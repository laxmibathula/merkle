const mongoose = require("mongoose");
const db = process.env.ATLAS;

mongoose
   .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
   })
   .then(() => console.log("connected succesfully"))
   .catch((err) => console.log(err));
