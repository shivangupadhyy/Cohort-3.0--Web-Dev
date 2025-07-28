// const title = document.querySelector('h1')
// console.log(title.innerHTML)

// const firstTodo = document.querySelector('h4')
// firstTodo.textContent = "1. Dont take the class"
// console.log(firstTodo.innerHTML)

// const secondTodo = document.querySelectorAll('h4')[1]
// console.log(secondTodo.innerHTML)

// const thirdTodo = document.querySelectorAll('h4')[2]
// console.log(thirdTodo.innerHTML)

function deleteTodo(index){
    const element = document.getElementById("todo-"+ index);
    element.parentNode.removeChild(element)
}
