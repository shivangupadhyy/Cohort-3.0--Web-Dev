let bookmarks = [];
let currentId = 1;

 async function addBookmark(req, res, next){
    try{
        const category = req.body.category;
        const url = req.body.url;

        if(!category || !url){
            return res.status(400).json({error: "Category and Url are required"});
        }

        const newBookmark = {
            id: currentId++,
            category,
            url, 
            };
            bookmarks.push(newBookmark);
            return res.status(201).json(newBookmark)
    }catch(error){
        return res.status(500).json({
            error: "An error occurred while adding the bookmark"
        });
    }
}

  async function deleteBookmark(req, res, next){
    try{
        const {id} = req.params;
        const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id == id);
        if(bookmarkIndex === -1){
            return res.status(404).json({error:"bookmark not found"})
        }
        bookmarks.splice(bookmarkIndex, 1);
        return res.status(200).json({messgae: "bookmark deleted successfully!"})
    }catch (error){
    return res.status(500).json({
        error:"An error occured while deleteing the bookmark"
    })
    }
}

 async function getAllBookmark(req,res, next){
    res.json(bookmarks);
}

module.exports = {
  addBookmark,
  deleteBookmark,
  getAllBookmark
};