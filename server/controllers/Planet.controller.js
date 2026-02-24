import Planet from "../models/Planet.entity.js";

const PlanetController = {
  async createPlanet(req, res) {
    try {
      const newPlanet = await Planet.create(req.body);
      return res.status(201).json(newPlanet);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getPlanets(req, res) {
    try {
      const Planets = await Planet.findAll();
      return res.status(200).json(Planets);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getPlanetById(req, res) {
    const { id } = req.params;
    try {
      const PlanetRecord = await Planet.findByPk(id);
      if (!PlanetRecord) {
        return res.status(404).json({ message: "Planet not found" });
      }
      return res.status(200).json(PlanetRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updatePlanet(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedPlanet] = await Planet.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Planet not found" });
      }
      return res.status(200).json(updatedPlanet[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deletePlanet(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Planet.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Planet not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default PlanetController;
