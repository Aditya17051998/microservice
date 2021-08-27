require("dotenv").config();

let seneca = require("seneca");
const config = require("./config/index");

seneca = seneca({ timeout: config.databaseMicroService.timeout });

const user = require("./services/user");
const userProfile = require("./services/userProfile");
const course = require("./services/course");
const section = require("./services/section");
const lecture = require("./services/lecture");
const assignment = require("./services/assignment");

seneca.use(user);
seneca.use(userProfile);
seneca.use(course);
seneca.use(section);
seneca.use(lecture);
seneca.use(assignment);

seneca.listen(config.databaseMicroService);
console.log(`Microservice databaseConnector on port:${config.databaseMicroService.port}`);

