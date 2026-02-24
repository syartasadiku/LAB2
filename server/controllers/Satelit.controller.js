import Satelit from "../models/Satelit.entity.js";

const SatelitController = {
  async createSatelit(req, res) {
    try {
      const newSatelit = await Satelit.create(req.body);
      return res.status(201).json(newSatelit);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getSatelits(req, res) {
    try {
      const Satelits = await Satelit.findAll();
      return res.status(200).json(Satelits);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getSatelitById(req, res) {
    const { id } = req.params;
    try {
      const SatelitRecord = await Satelit.findByPk(id);
      if (!SatelitRecord) {
        return res.status(404).json({ message: "Satelit not found" });
      }
      return res.status(200).json(SatelitRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateSatelit(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedSatelit] = await Satelit.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Satelit not found" });
      }
      return res.status(200).json(updatedSatelit[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteSatelit(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Satelit.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Satelit not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default SatelitController;
