// Problem: User interaction doesnt provide desired results
// Solution: Add interactivity so that use can manage daily tasks

var taskInput; //new-task
var addButton; //first button
var incompleteTasksHolder; //incomplete-tasks
var completedTasksHolder; //completed-tasks

//Add a new
var addTask = function ( ){
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
     //When the delete button is pressed
          //remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function ( ){
     //When the checkbox is checked
          //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function ( ){
//When the checkbox is unchecked
     //Append the task list item to the #incompleted-task
}
