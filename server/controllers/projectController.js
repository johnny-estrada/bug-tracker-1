const { Project } = require("../models");

module.exports = {
  listAction: async function (req, res) {
    try {
      const listOfProjects = await Project.findAll();
      res.json(listOfProjects);
    } catch (error) {
      console.log(error);
    }
  },
  createAction: async function (req, res) {
    try {
      const project = req.body;
      await Project.create(project);
      res.json(project);
    } catch (error) {
      console.log(error);
    }
  },
};
