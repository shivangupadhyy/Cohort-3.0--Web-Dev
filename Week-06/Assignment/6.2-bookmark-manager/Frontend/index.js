const API_URL = 'http://localhost:3001/bookmarks'

function fetchBookmark(){
    fetch(API_URL)
    .then(Response=> Response.json())
    .then(bookmarks =>{
        bookmarks.forEach(bookmark => addBookmarkToDom(bookmark));
    })
    .catch(error => console.error('error fetching bookmark:', error))
}

function addBookmarkToDom(bookmark){
    const bookmarkList = document.getElementById('bookmark-list');

    const bookmarkItem = document.createElement('li');
    bookmarkItem.classList.add('bookmark-item');
    bookmarkItem.setAttribute('data-id', bookmark.id);

    const url = document.createElement('span');
    console.log(bookmark.url)
    url.textContent = `${bookmark.url} (${bookmark.category})`;

    const openButton = document.createElement('button');
    openButton.textContent = 'Open in new tab';
    openButton.addEventListener('click', ()=>{
        window.open(bookmark.url)
    })

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', ()=>{
        deleteBookmark(bookmark.id)
    })

   

    

    bookmarkItem.appendChild(url);
    bookmarkItem.appendChild(openButton)
    bookmarkItem.appendChild(deleteButton);
    bookmarkList.appendChild(bookmarkItem)
}


document.getElementById('add-todo-btn').addEventListener('click',()=>{
    const urlInput = document.getElementById('bookmark-url');
    const categoryInput = document.getElementById('bookmark-category');

    if(!urlInput || !categoryInput || urlInput.value.trim() === '' || categoryInput.value.trim() === ''){
        console.error('Please provide both url and category');
        return
    }

    const newBookmark = { url: urlInput.value, category: categoryInput.value };

    fetch(API_URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBookmark),
    })
    .then(response=> response.json())
    .then(bookmark =>{
        addBookmarkToDom(bookmark);
        urlInput.value = '';//clear inout after adding
        categoryInput.value = '';
    })
    .catch(error => console.error('Error adding Bookmark:', error))
})

function deleteBookmark(id){
    fetch(`${API_URL}/${id}`,{
        method: 'DELETE',
    })
    .then(()=>{
        const bookmarkItem = document.querySelector(`[data-id='${id}']`);
        bookmarkItem.remove();
    })
    .catch(error => console.error(`error deleting bookmark: ${error}`))
}