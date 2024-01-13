
function functionButtonView(){
   var functionsArr = functionModel();
   let parentElement = document.getElementById("controller");
   let parentDiv = document.createElement("div");
   parentDiv.setAttribute('id','function-div');
    for(let i = 0; i < functionsArr.length; i++){
        let functionButtons = document.createElement("button");
        functionButtons.setAttribute('id','btn-'+functionsArr[i]);
        functionButtons.textContent = functionsArr[i];
        parentDiv.appendChild(functionButtons);
    }
    parentElement.appendChild(parentDiv);
    return parentDiv.id;
}

