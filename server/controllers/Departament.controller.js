import Departament from "../models/Departament.entity.js";

const DepartamentController = {
  async createDepartament(req, res) {
    try {
      const newDepartament = await Departament.create(req.body);
      return res.status(201).json(newDepartament);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getDepartaments(req, res) {
    try {
      const Departaments = await Departament.findAll();
      return res.status(201).json(Departaments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getDepartamentById(req, res) {
    const { id } = req.params;
    try {
      const DepartamentRecord = await Departament.findByPk(id);
      if (!DepartamentRecord) {
        return res.status(404).json({ message: "Departament not found" });
      }
      return res.status(200).json(DepartamentRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateDepartament(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedDepartament] = await Departament.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Departament not found" });
      }
      return res.status(200).json(updatedDepartament[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteDepartament(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Departament.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Departament not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default DepartamentController;
