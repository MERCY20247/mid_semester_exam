function addItem() {
    let input = document.getElementById("bucketInput");
    let itemText = input.value.trim();

    if (itemText === "") {
        alert("Please enter an item!");
        return;
    }

    let list = document.getElementById("bucketList");

    let li = document.createElement("li");
    li.innerHTML = `${itemText} <button class="delete-btn" onclick="removeItem(this)">X</button>`;
    
    list.appendChild(li);
    input.value = "";
}

function removeItem(button) {
    let li = button.parentElement;
    li.remove();
}
