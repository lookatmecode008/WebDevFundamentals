<<<<<<< HEAD
const toDoList = [{name: 'wash dishes', date: '05/12/2024'}]
const toDoInput = document.querySelector('.insertToDo');
const dueDateInput = document.querySelector('.insertDate');

const savedList = localStorage.getItem('myList');
let memItem = JSON.parse(savedList)

const addButton = document.querySelector('.add-button');
addButton.onclick = () => {
    toDoList.push({name: toDoInput.value, date:dueDateInput.value})
    toDoInput.value = '';
    createToDoList()
}
    
 function createToDoList(){ 
    let outputHTML=``;
    for (let i = 0; i < toDoList.length; i++) {
        const name=toDoList[i].name;
        const date=toDoList[i].date;
        
        item =
        `<p>${name} ${date} 
            <button 
                onclick="
                    toDoList.splice(${i},1);
                    createToDoList();
                ">Delete
            </button>
        </p>` 
        
        localStorage.setItem('myList', JSON.stringify(toDoList));
        outputHTML += item;
        document.querySelector('.outputScreen'). innerHTML = outputHTML
    }
 }

 setInterval (function () {
    console.log ('hello')
=======
const toDoList = [{name: 'wash dishes', date: '05/12/2024'}]
const toDoInput = document.querySelector('.insertToDo');
const dueDateInput = document.querySelector('.insertDate');

const savedList = localStorage.getItem('myList');
let memItem = JSON.parse(savedList)

const addButton = document.querySelector('.add-button');
addButton.onclick = () => {
    toDoList.push({name: toDoInput.value, date:dueDateInput.value})
    toDoInput.value = '';
    createToDoList()
}
    
 function createToDoList(){ 
    let outputHTML=``;
    for (let i = 0; i < toDoList.length; i++) {
        const name=toDoList[i].name;
        const date=toDoList[i].date;
        
        item =
        `<p>${name} ${date} 
            <button 
                onclick="
                    toDoList.splice(${i},1);
                    createToDoList();
                ">Delete
            </button>
        </p>` 
        
        localStorage.setItem('myList', JSON.stringify(toDoList));
        outputHTML += item;
        document.querySelector('.outputScreen'). innerHTML = outputHTML
    }
 }

 setInterval (function () {
    console.log ('hello')
>>>>>>> 07f8e3a (Initial Project Files Uploaded via VSCode)
 }, 2000)