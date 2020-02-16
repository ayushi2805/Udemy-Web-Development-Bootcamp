var todos = [];

window.setTimeout(function() {
    var input = prompt("What would You like to do?");
    while(input !== "quit"){
        if(input === "list") 
            displayList();
        else if(input === "new")
            addItem();
        else if(input === "delete")
            deleteItem();
        input = prompt("What would You like to do?");
    }
    console.log("You Quit the App");
  }, 500);

function displayList(){
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo)
    });
    console.log("**********");
}

function deleteItem(){
    var index = prompt("Enter the index for the item to be deleted");
    todos.splice(index,1);
    console.log("Todo Removed");
}

function addItem(){
    var newtodo = prompt("Add a todo");
    todos.push(newtodo);
    console.log(newtodo + " added to list");
}