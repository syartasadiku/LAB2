import Eventi from "../models/Eventi.entity.js";

const EventiController = {
  async createEventi(req, res) {
    try {
      const newEventi = await Eventi.create(req.body);
      return res.status(201).json(newEventi);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getEventis(req, res) {
    try {
      const Eventis = await Eventi.findAll();
      return res.status(201).json(Eventis);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getEventiById(req, res) {
    const { id } = req.params;
    try {
      const EventiRecord = await Eventi.findByPk(id);
      if (!EventiRecord) {
        return res.status(404).json({ message: "Eventi not found" });
      }
      return res.status(200).json(EventiRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateEventi(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedEventi] = await Eventi.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Eventi not found" });
      }
      return res.status(200).json(updatedEventi[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteEventi(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Eventi.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Eventi not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default EventiController;
