import NoteSchema from "../models/note_model.js";

export const createNote = async (req, res) => {
  try {
    const {title, content} = req.body;
    if(!title && !content){
        return res.status(400).json({message: "Title and Content are required"});
    }
    const newNote = new NoteSchema({title, content})
    await newNote.save();
    res.status(201).json(newNote)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const getNotes = async(req, res) =>{
    try {
        const notes = await NoteSchema.find().sort({createNote: -1})
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
