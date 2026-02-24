import Festivali from "../models/Festivali.entity.js";

const FestivaliController = {
  async createFestivali(req, res) {
    try {
      const newFestivali = await Festivali.create(req.body);
      return res.status(201).json(newFestivali);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getFestivalis(req, res) {
    try {
      const Festivalis = await Festivali.findAll();
      return res.status(201).json(Festivalis);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getFestivaliById(req, res) {
    const { id } = req.params;
    try {
      const FestivaliRecord = await Festivali.findByPk(id);
      if (!FestivaliRecord) {
        return res.status(404).json({ message: "Festivali not found" });
      }
      return res.status(200).json(FestivaliRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateFestivali(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedFestivali] = await Festivali.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Festivali not found" });
      }
      return res.status(200).json(updatedFestivali[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteFestivali(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Festivali.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Festivali not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default FestivaliController;
