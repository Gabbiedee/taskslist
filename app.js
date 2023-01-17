// declare the UI variables

const form = document.getElementById('task-form');
const filterTask = document.getElementById('filter');
const taskList = document.querySelector('.collection');
const taskInput = document.getElementById('task');
const ctask = document.querySelector('.clear-task')

// create a UI constructor
function UI(){};


// showalert
UI.prototype.showAlert = function (message, className){
  // create a div
  const div = document.createElement('div');
  // add classes
   div.className = `alert ${className}`

  //  create textnode
  div.appendChild(document.createTextNode(message));


//  get tasklist
const add = document.querySelector('.card-content')

// insert div
add.parentNode.insertBefore(div, add)

// settimeout to disappear after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').remove()
}, 3000)

}

// add event listener to submit button
form.addEventListener('submit', function(e) {
if (taskInput.value === "") {
  
  // instatiate ui
const ui = new UI()

  ui.showAlert(`Input field is empty, kindly add task`, `error`)
} else {
  // create li
  const li = document.createElement('li')

  // create class
  li.className = 'collection-item'

  // create textnode
  li.appendChild(document.createTextNode(taskInput.value));

  // create link
  const link = document.createElement('a');

  // create a class for link
  link.className = 'delete-item secondary-content'

  // decide link needed
  link.innerHTML = '<i style="float: right" class="fa fa-trash"> </i>'

  // append link to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  taskInput.value= ''


// instatiate ui
const ui = new UI()

  ui.showAlert(`Task successfully added`, `success`)


}


 e.preventDefault() 
})

// addeventlistner to remove task
taskList.addEventListener('click', function(e) {
  if (e.target.parentElement.classList.contains(`delete-item`)) {
    confirm(`are you sure?`)
    e.target.parentElement.parentElement.remove()
  }
})

// filter task

// add eventlistner
filterTask.addEventListener('keyup', filterInput)

// call function
function filterInput(e){

  // declare the text to search
  const text = e.target.value.toLowerCase();

  // loop through
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) > -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
  
 
}

// clear task
// add event listener
ctask.addEventListener('click', clearTask);

function clearTask(e) {
  taskList.innerHTML = ''

  e.preventDefault()
}
