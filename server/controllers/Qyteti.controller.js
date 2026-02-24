import Qyteti from "../models/Qyteti.entity.js";

const QytetiController = {
  async createQyteti(req, res) {
    try {
      const newQyteti = await Qyteti.create(req.body);
      return res.status(201).json(newQyteti);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getQytetis(req, res) {
    try {
      const Qytetis = await Qyteti.findAll();
      return res.status(201).json(Qytetis);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getQytetiById(req, res) {
    const { id } = req.params;
    try {
      const QytetiRecord = await Qyteti.findByPk(id);
      if (!QytetiRecord) {
        return res.status(404).json({ message: "Qyteti not found" });
      }
      return res.status(200).json(QytetiRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateQyteti(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedQyteti] = await Qyteti.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Qyteti not found" });
      }
      return res.status(200).json(updatedQyteti[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteQyteti(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Qyteti.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Qyteti not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default QytetiController;
