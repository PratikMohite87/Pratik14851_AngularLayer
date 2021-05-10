const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const msgsController = require("./db.messagescontroller");
const sectionController = require("./db.sectioncontroller");

app.use(cors());
app.use(bodyparser.json());
app.use('/messages', msgsController);
app.use('/section', sectionController);

app.listen(3000);