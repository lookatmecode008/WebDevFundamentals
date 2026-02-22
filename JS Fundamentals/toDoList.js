const listItems = [{todoItem: 'watch youtube', todoDate: '12-12-2012'}]
const addButton = document.querySelector('.js-add');
const remButton = document.querySelector('.js-remove');
const arrayOutput = document.querySelector('.js-array-output');

JSON.parse(localStorage.getItem('toDoArray'));

//localStorage.removeItem('toDoArray')

function createToDoList() {
    let todoListHTML = ``;
    for (let i= 0; i < listItems.length; i++) {
        const todoObj = listItems[i];
        let name = todoObj.todoItem
        let date = todoObj.todoDate
        
        item = `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick= "listItems.splice(${i},1);
        createToDoList();
        " class="del-button">Delete</button>
        </div>`;
        
        todoListHTML += item;

        document.querySelector('.js-array-output').innerHTML = todoListHTML;
        } 
}

function addItem() {
    let inputValue = document.querySelector('.js-input');
    const todoItem = inputValue.value;
    const dueDate = document.querySelector('.datum');
    const todoDate = dueDate.value;

    listItems.push({todoItem, todoDate});
    
    inputValue.value = '';

    localStorage.setItem('toDoArray', JSON.stringify(listItems))
    
    createToDoList()

}
