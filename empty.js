var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");
let listed = document.getElementsByClassName("listed-item");
var deleteButton = document.getElementsByClassName("delete");

function inputLength(){
    return input.value.length
}
function createListElement(){
    var li = document.createElement("li");
    li.classList.add("listed-item")
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
     var Buttonss = document.createElement("button");
     Buttonss.classList.add("delete")
     Buttonss.innerHTML = "delete";
     ul.appendChild(Buttonss)
}

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    };
}

function addListAfterKeyup(event){
    if (inputLength() > 0 && event.key === "Enter"){
        createListElement();
    };
}

   
  deleteButton.addEventListener("click", function(){
    listed = " ";
  })
    // function markList(){
    //     list.classList.add("done");
    // }
    // list.addEventListener("click", markList )

button.addEventListener("click", addListAfterClick);

input.addEventListener("keyup", addListAfterKeyup);

