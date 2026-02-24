import Botuesi from "../models/Botuesi.entity.js";

const BotuesiController = {
  async createBotuesi(req, res) {
    try {
      const newBotuesi = await Botuesi.create(req.body);
      return res.status(201).json(newBotuesi);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getBotuesis(req, res) {
    try {
      const Botuesis = await Botuesi.findAll();
      return res.status(201).json(Botuesis);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getBotuesiById(req, res) {
    const { id } = req.params;
    try {
      const BotuesiRecord = await Botuesi.findByPk(id);
      if (!BotuesiRecord) {
        return res.status(404).json({ message: "Botuesi not found" });
      }
      return res.status(200).json(BotuesiRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateBotuesi(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedBotuesi] = await Botuesi.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Botuesi not found" });
      }
      return res.status(200).json(updatedBotuesi[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteBotuesi(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Botuesi.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Botuesi not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default BotuesiController;
