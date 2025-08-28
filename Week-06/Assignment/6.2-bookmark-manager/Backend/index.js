const express  = require('express')
const cors = require('cors')
const { addBookmark, deleteBookmark, getAllBookmark } = require('./routes/bookmark');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json())

// Get all bookmarks
app.get('/bookmarks', getAllBookmark);

// Add a new bookmark
app.post('/bookmarks', addBookmark);


// Delete a bookmark
app.delete('/bookmarks/:id', deleteBookmark);

//  TODO: Can u implement searching bookmark and favorite and unfavorite bookmark route ??

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});