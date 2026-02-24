import Student from "../models/Student.entity.js";

const StudentController = {
  async createStudent(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      return res.status(201).json(newStudent);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getStudents(req, res) {
    try {
      const Students = await Student.findAll();
      return res.status(201).json(Students);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getStudentById(req, res) {
    const { id } = req.params;
    try {
      const StudentRecord = await Student.findByPk(id);
      if (!StudentRecord) {
        return res.status(404).json({ message: "Student not found" });
      }
      return res.status(200).json(StudentRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateStudent(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedStudent] = await Student.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Student not found" });
      }
      return res.status(200).json(updatedStudent[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteStudent(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Student.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Student not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default StudentController;
