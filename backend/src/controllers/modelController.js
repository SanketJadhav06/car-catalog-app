const modelService = require('../services/modelService');

exports.getModels = async (req, res) => {
  try {
    const models = await modelService.getAllModels();
    res.json(models);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getModelById = async (req, res) => {
  try {
    const model = await modelService.getModelById(req.params.id);
    res.json(model);
  } catch (err) {
    res.status(500).send(err);
  }
};
