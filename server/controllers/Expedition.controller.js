import Expedition from "../models/Expedition.entity.js";

const ExpeditionController = {
  async createExpedition(req, res) {
    try {
      const newExpedition = await Expedition.create(req.body);
      return res.status(201).json(newExpedition);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getExpeditions(req, res) {
    try {
      const Expeditions = await Expedition.findAll();
      return res.status(201).json(Expeditions);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getExpeditionById(req, res) {
    const { id } = req.params;
    try {
      const ExpeditionRecord = await Expedition.findByPk(id);
      if (!ExpeditionRecord) {
        return res.status(404).json({ message: "Expedition not found" });
      }
      return res.status(200).json(ExpeditionRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateExpedition(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedExpedition] = await Expedition.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Expedition not found" });
      }
      return res.status(200).json(updatedExpedition[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteExpedition(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Expedition.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Expedition not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default ExpeditionController;
