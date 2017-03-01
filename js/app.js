// Problem: User interaction doesnt provide desired results
// Solution: Add interactivity so that use can manage daily tasks

var taskInput =  $('#new-task') //new-task document.getElementById("new-task")
var addButton = document.getElementsByTagName('button')[0] //first button
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
var taskIncomplete = function ( ){
     console.log('inCompleted task..')
     //When the checkbox is unchecked
          //Append the task list item to the #incompleted-task
}


//Set the click handler to the addTask function
