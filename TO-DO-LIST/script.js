function addItem(sectionId) {
    const section = document.getElementById(sectionId);
    const input = section.querySelector(".add-item input");
    const itemsContainer = section.querySelector(".items");

    if (input.value.trim() !== "") {
        const item = document.createElement("div");
        item.classList.add("item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                text.style.textDecoration = "line-through";
            } else {
                text.style.textDecoration = "none";
            }
        });

        const text = document.createElement("span");
        text.textContent = input.value;

        item.appendChild(checkbox);
        item.appendChild(text);
        itemsContainer.appendChild(item);

        input.value = "";
    }
}

function selectDate() {
    const calendarInput = document.getElementById("calendar");
    const selectedDate = calendarInput.value;

    if (selectedDate) {
        alert(`You selected: ${selectedDate}`);
    }
}
