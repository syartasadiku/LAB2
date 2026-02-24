import Shteti from "../models/Shteti.entity.js";

const ShtetiController = {
  async createShteti(req, res) {
    try {
      const newShteti = await Shteti.create(req.body);
      return res.status(201).json(newShteti);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getShtetis(req, res) {
    try {
      const Shtetis = await Shteti.findAll();
      return res.status(201).json(Shtetis);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getShtetiById(req, res) {
    const { id } = req.params;
    try {
      const ShtetiRecord = await Shteti.findByPk(id);
      if (!ShtetiRecord) {
        return res.status(404).json({ message: "Shteti not found" });
      }
      return res.status(200).json(ShtetiRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateShteti(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedShteti] = await Shteti.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Shteti not found" });
      }
      return res.status(200).json(updatedShteti[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteShteti(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Shteti.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Shteti not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default ShtetiController;
