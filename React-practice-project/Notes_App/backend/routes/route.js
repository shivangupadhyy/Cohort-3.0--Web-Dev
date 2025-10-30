import express from 'express';
import { createNote, getNotes } from '../controllers/notes_controller.js';
const router = express.Router();

router.post("/create-note", createNote)
router.get("/get-notes",getNotes )

export default router