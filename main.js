
let getMoodParent = document.getElementById('moodActive')
console.log(getMoodParent)
function mood() {
    return ` <button class="btn dark-btn"><i class="fa-solid fa-moon"></i></button>
    <button class="btn light-btn"><i class="fa-regular fa-moon"></i></button>`;
}

getMoodParent.innerHTML = mood(0);
console.log(getMoodParent)

let darkBtn = document.querySelector('.dark-btn');
let lightBtn = document.querySelector('.light-btn');
console.log(darkBtn);
console.log(lightBtn);

darkBtn.addEventListener('click', function () {
    let element = document.getElementById('color');
    element.classList.add('black');
    element.classList.remove('white');
});

lightBtn.addEventListener('click', function () {
    let element = document.getElementById('color');
    element.classList.add('white');
    element.classList.remove('black')
});


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    addItem();
});

function addItem() {
    let inputField = document.getElementById('dataInput');
    let dataOutput = document.getElementById('dataOutput');
    let data = inputField.value;
    
    let listItem = document.createElement(`li`);
    
    listItem.textContent = data;
    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'X';
                    deleteBtn.classList.add('delete-btn');
                    deleteBtn.addEventListener('click', function () {
                        listItem.remove();
                    });

                    listItem.appendChild(deleteBtn);        
    dataOutput.appendChild(listItem);

    let radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio'); 
    listItem.appendChild(radioInput);
     
    inputField.value = "";
}

