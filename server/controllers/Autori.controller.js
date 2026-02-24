import Autori from "../models/Autori.entity.js";

const AutoriController = {
  async createAutori(req, res) {
    try {
      const newAutori = await Autori.create(req.body);
      return res.status(201).json(newAutori);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAutoris(req, res) {
    try {
      const Autoris = await Autori.findAll();
      return res.status(200).json(Autoris);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAutoriById(req, res) {
    const { id } = req.params;
    try {
      const AutoriRecord = await Autori.findByPk(id);
      if (!AutoriRecord) {
        return res.status(404).json({ message: "Autori not found" });
      }
      return res.status(200).json(AutoriRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateAutori(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedAutori] = await Autori.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Autori not found" });
      }
      return res.status(200).json(updatedAutori[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteAutori(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Autori.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Autori not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default AutoriController;