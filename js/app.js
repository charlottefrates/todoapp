// Problem: User interaction doesnt provide desired results
// Solution: Add interactivity so that use can manage daily tasks

var taskInput =  $('#new-task') //new-task document.getElementById("new-task")
var addButton = $('#add') //first button document.getElementsByTagName('button')[0]
var incompleteTasksHolder = $('#incomplete-tasks') //incomplete-tasks  Document.getElementById("incomplete-tasks")
var completedTasksHolder = $('#completed-tasks')  //completed-tasks document.getElementById("completed-tasks")

//Add a new
var addTask = function ( ){
     console.log('Add task..')
     //when the button is pressed
     // Create a a new list item with the text from #new-task:
          // input (checkbox)
          //label
          // input (text)
          // button.edit
          //button.delete
          //Each element, needs modified and appended
}

//Edit Existing task
var editTask =  function ( ){
     console.log('Edit task..')
     //When the edit button is pressed
          // if the class of the parent is .editMode
               //Switch from .editMode
               //label text become input's value
          // else
               //switch to .editMode
               //input value becomes the label's text
          //toggle .editmode on the parent
}

//Delete an exisiting task
var deleteTask = function ( ){
     console.log('Delete task..')
     //When the delete button is pressed
          //remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function ( ){
     console.log('Completed task..')
     //When the checkbox is checked
          //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskInComplete = function ( ){
     console.log('inCompleted task..')
     //When the checkbox is unchecked
          //Append the task list item to the #incompleted-task
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list events");
    // select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");  //$('.checkbox');; edit needed a space between input and [] //////
    var editButton = taskListItem.querySelector("button.edit");  //$('.edit');//
    var deleteButton = taskListItem.querySelector("button.delete");  //$('.delete');//

    // bind editTask to editButton
    editButton.onclick = editTask;

    //  bind deleteTask to deleteButton;
    deleteButton.onclick = deleteTask;

    // bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

//Set the click handler to the addTask function
addButton.onclick = addTask;


// cycle over incompleteTaskHolder ul list item
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //  bind events to list item's children (taskcompleted)
  bindTaskEvents(incompleteTasksHolder .children[i], taskCompleted);
}
// cycle over completeTaskHolder ul list item
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //    bind events to list item's children (taskincomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskInComplete);
}
