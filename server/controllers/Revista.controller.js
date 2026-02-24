import Revista from "../models/Revista.entity.js";

const RevistaController = {
  async createRevista(req, res) {
    try {
      const newRevista = await Revista.create(req.body);
      return res.status(201).json(newRevista);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getRevistas(req, res) {
    try {
      const Revistas = await Revista.findAll();
      return res.status(201).json(Revistas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getRevistaById(req, res) {
    const { id } = req.params;
    try {
      const RevistaRecord = await Revista.findByPk(id);
      if (!RevistaRecord) {
        return res.status(404).json({ message: "Revista not found" });
      }
      return res.status(200).json(RevistaRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateRevista(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedRevista] = await Revista.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Revista not found" });
      }
      return res.status(200).json(updatedRevista[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteRevista(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Revista.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Revista not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default RevistaController;
