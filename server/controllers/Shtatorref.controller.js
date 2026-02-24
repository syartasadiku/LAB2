import Shtatorref from "../models/Shtatorref.entity.js";

const ShtatorrefController = {
  async createShtatorref(req, res) {
    try {
      const newShtatorref = await Shtatorref.create(req.body);
      return res.status(201).json(newShtatorref);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getShtatorrefs(req, res) {
    try {
      const Shtatorrefs = await Shtatorref.findAll();
      return res.status(201).json(Shtatorrefs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getShtatorrefById(req, res) {
    const { id } = req.params;
    try {
      const ShtatorrefRecord = await Shtatorref.findByPk(id);
      if (!ShtatorrefRecord) {
        return res.status(404).json({ message: "Shtatorref not found" });
      }
      return res.status(200).json(ShtatorrefRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateShtatorref(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedShtatorref] = await Shtatorref.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Shtatorref not found" });
      }
      return res.status(200).json(updatedShtatorref[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteShtatorref(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Shtatorref.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Shtatorref not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default ShtatorrefController;
