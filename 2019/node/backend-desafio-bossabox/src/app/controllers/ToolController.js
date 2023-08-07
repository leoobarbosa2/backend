const yup = require('yup');
const Tool = require('../models/Tool');

module.exports = {
  async index(req, res) {
    const { tag } = req.query;

    if (tag) {
      const filteredTools = await Tool.find({ tags: tag }).select('-__v');

      return res.json(filteredTools);
    }

    const tools = await Tool.find().select('-__v');

    if (tools.length === 0) {
      return res.status(404).json({ message: 'No tools registered' });
    }

    return res.json(tools);
  },

  async store(req, res) {
    const { title, link, description, tags } = req.body;

    const schema = yup.object().shape({
      title: yup.string().required(),
      link: yup.string().required(),
      description: yup
        .string()
        .min(10)
        .required(),
      tags: yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const ToolExists = await Tool.findOne({ title });

    if (ToolExists) {
      return res.status(401).json({ error: 'Tool already exists' });
    }

    await Tool.create({ title, link, description, tags });

    return res.json({ title, link, description, tags });
  },

  async delete(req, res) {
    const { id } = req.params;

    const deleteTool = await Tool.findById(id);

    if (!deleteTool) {
      return res
        .status(404)
        .json({ error: 'Does not exists a tool with this ID' });
    }

    await Tool.findByIdAndDelete(deleteTool.id);

    return res.status(204).send();
  },
};
