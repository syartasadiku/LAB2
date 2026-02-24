import Shtator from "../models/Shtator.entity.js";

const ShtatorController = {
  async createShtator(req, res) {
    try {
      const newShtator = await Shtator.create(req.body);
      return res.status(201).json(newShtator);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getShtators(req, res) {
    try {
      const Shtators = await Shtator.findAll();
      return res.status(201).json(Shtators);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getShtatorById(req, res) {
    const { id } = req.params;
    try {
      const ShtatorRecord = await Shtator.findByPk(id);
      if (!ShtatorRecord) {
        return res.status(404).json({ message: "Shtator not found" });
      }
      return res.status(200).json(ShtatorRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateShtator(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedShtator] = await Shtator.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Shtator not found" });
      }
      return res.status(200).json(updatedShtator[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteShtator(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Shtator.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Shtator not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default ShtatorController;
