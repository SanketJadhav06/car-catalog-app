const Model = require('../models/model');

exports.getAllModels = async () => {
  return await Model.find();
};

exports.getModelById = async (id) => {
  return await Model.findById(id);
};
