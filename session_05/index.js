const express = require("express");
const coursesRouter = require("./routes/courses.route");
const app = express();

/*
  How to validate req.body ==> Search On Google.com
  library: express-validator, Joi, zod-express-middleware
*/

app.use(express.json());
// app.use(bodyParser.json());


app.use("/api/courses", coursesRouter);  //    /api/courses


// CRUD (Create / Read / Update / Delete)


app.listen(4000, () => {
  console.log("listening on port: 4000");
});


/* NOTE
  How to create documentation for my project
  How to share APIs with team and documentation
*/