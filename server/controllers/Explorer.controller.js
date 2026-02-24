import Explorer from "../models/Explorer.entity.js";

const ExplorerController = {
  // Create or update explorer based on name uniqueness
  async createExplorer(req, res) {
    const { Name, Nationality } = req.body;
    try {
      // Check if an explorer with the same name exists
      const existingExplorer = await Explorer.findOne({ where: { Name } });

      if (existingExplorer) {
        // If the explorer exists, update its nationality
        const updatedExplorer = await Explorer.update(
          { Nationality },
          { where: { Name }, returning: true }
        );
        return res.status(200).json(updatedExplorer[1][0]); // Return the updated explorer
      } else {
        // If no explorer exists with that name, create a new one
        const newExplorer = await Explorer.create({ Name, Nationality });
        return res.status(201).json(newExplorer);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getExplorers(req, res) {
    try {
      const explorers = await Explorer.findAll();
      return res.status(200).json(explorers);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getExplorerById(req, res) {
    const { id } = req.params;
    try {
      const explorerRecord = await Explorer.findByPk(id);
      if (!explorerRecord) {
        return res.status(404).json({ message: "Explorer not found" });
      }
      return res.status(200).json(explorerRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateExplorer(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedExplorer] = await Explorer.update(body, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Explorer not found" });
      }
      return res.status(200).json(updatedExplorer[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteExplorer(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Explorer.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Explorer not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default ExplorerController;
