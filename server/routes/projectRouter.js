const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");
router.get("/", projectController.listAction);

router.post("/", projectController.createAction);

module.exports = router;
