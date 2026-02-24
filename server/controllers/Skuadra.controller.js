import Skuadra from "../models/Skuadra.entity.js";

const SkuadraController = {
  async createSkuadra(req, res) {
    try {
      const newSkuadra = await Skuadra.create(req.body);
      return res.status(201).json(newSkuadra);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getSkuadras(req, res) {
    try {
      const Skuadras = await Skuadra.findAll();
      return res.status(201).json(Skuadras);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getSkuadraById(req, res) {
    const { id } = req.params;
    try {
      const SkuadraRecord = await Skuadra.findByPk(id);
      if (!SkuadraRecord) {
        return res.status(404).json({ message: "Skuadra not found" });
      }
      return res.status(200).json(SkuadraRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateSkuadra(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedSkuadra] = await Skuadra.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Skuadra not found" });
      }
      return res.status(200).json(updatedSkuadra[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteSkuadra(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Skuadra.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Skuadra not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default SkuadraController;
