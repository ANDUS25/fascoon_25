const addButton =  document.querySelector(".addButton")
var input = document.querySelector(".input")
const container = document.querySelector(".data_container")


class item {

    constructor(itemName){
        this.createDiv(itemName)
    }

    createDiv(itemName){
        let input = document.createElement("input")
        input.value = itemName;
        input.disabled = true;
        input.classList.add("item_input")
        input.type="text"
        // input.style.fontSize = "25px"
        // input.style.color = "black"
        // input.style.borderRadius = "10px"
        // input.style.display = "flex"

        let itemBox = document.createElement("div")
        itemBox.classList.add("item")

        let label = document.createElement("p")
        label.document.write = "You have added this content :- "

        let editButton = document.createElement("button")
        editButton.innerHTML = "EDIT"
        editButton.classList.add("editButton")

        let removeButton= document.createElement("button")
        removeButton.innerHTML = "REMOVE"
        removeButton.classList.add("removeButton")

        container.appendChild(itemBox);
        itemBox.appendChild(p);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener("click",()=>{
            this.edit(input)
        })

        removeButton.addEventListener("click",()=>{
            this.remove(input)
        })
    }

    edit(){
        item.disabled = !item.disabled
    }

    remove(){
        container.removeChild(item)
    }
}

function check(){
    if(input.value != ' ')
    {
        new item(input.value);
        input.value = ' ';
    }
}

addButton.addEventListener("click", check)