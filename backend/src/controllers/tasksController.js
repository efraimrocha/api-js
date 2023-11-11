/* eslint-disable linebreak-style */
// Importa o model tasksModel
const tasksModel = require('../models/tasksModel');


const getAll = async (request, response) => {
	const tasks = await tasksModel.getAll();

	return response.status(200).json(tasks);
};

// Exporta o conteúkdo do tasksController
module.exports = {
	getAll
};
