import Book from "../models/Book.entity.js";

const BookController = {
  async createBook(req, res) {
    try {
      const newBook = await Book.create(req.body);
      return res.status(200).json(newBook);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getBooks(req, res) {
    try {
      const Books = await Book.findAll();
      return res.status(200).json(Books);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getBookById(req, res) {
    const { id } = req.params;
    try {
      const BookRecord = await Book.findByPk(id);
      if (!BookRecord) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.status(200).json(BookRecord);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async updateBook(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [updatedRowsCount, updatedBook] = await Book.update(
        body,
        {
          where: { id },
          returning: true,
        }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.status(200).json(updatedBook[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteBook(req, res) {
    const { id } = req.params;
    try {
      const deletedRowCount = await Book.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.status(204).end(); // No content response
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default BookController;