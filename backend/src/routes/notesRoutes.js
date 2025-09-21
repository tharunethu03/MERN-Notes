import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote, getANoteByID } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getANoteByID);

router.post('/', createNote);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);

export default router;
