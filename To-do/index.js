let entertask = document.querySelector('.task');
let inputtxt = document.querySelector('.inp');
let btn = document.querySelector('button');

btn.addEventListener('click', generatetask);

inputtxt.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        generatetask();
    }
});

function generatetask() {
    if (inputtxt.value !== "") {
        let addnewdiv = document.createElement("div");
        let inputbtn = document.createElement('input');
        let pg = document.createElement('p');
        let cross = document.createElement('p');
        cross.classList = "crs";
        cross.innerHTML = '❌';
        pg.innerHTML = inputtxt.value;
        inputbtn.type = 'checkbox';
        addnewdiv.appendChild(inputbtn);
        addnewdiv.appendChild(pg);
        addnewdiv.appendChild(cross);
        addnewdiv.classList = 'newdiv';
        entertask.appendChild(addnewdiv);

        inputbtn.addEventListener('change', function () {
            if (inputbtn.checked) {
                pg.classList.add('strk'); 
            } else {
                pg.classList.remove('strk'); 
            }
        });

        // Retrieve existing tasks from local storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.push(inputtxt.value); // Store the input value
        localStorage.setItem('tasks', JSON.stringify(storedTasks));

        inputtxt.value = '';

        // Add event listener to the new cross
        cross.addEventListener('click', function () {
            addnewdiv.remove();
            updateStoredTasks();
        });
    }
}

window.addEventListener('load', () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    for (const taskContent of storedTasks) {
        let addnewdiv = document.createElement("div");
        let inputbtn = document.createElement('input');
        let pg = document.createElement('p');
        let cross = document.createElement('p');
        
        inputbtn.type = 'checkbox';
        pg.innerHTML = taskContent;
        cross.innerHTML = '❌';
        cross.classList = "crs";
        
        cross.addEventListener('click', function() {
            addnewdiv.remove();
            updateStoredTasks();
        });

        inputbtn.addEventListener('change', function () {
            if (inputbtn.checked) {
                pg.classList.add('strk'); 
            } else {
                pg.classList.remove('strk'); 
            }
        });

        addnewdiv.appendChild(inputbtn);
        addnewdiv.appendChild(pg);
        addnewdiv.appendChild(cross);
        
        addnewdiv.classList = 'newdiv';
        entertask.appendChild(addnewdiv);
    }
});

function updateStoredTasks() {
    const tasks = Array.from(document.querySelectorAll('.newdiv p:not(:last-child)'));
    const taskContents = tasks.map(task => task.textContent);
    localStorage.setItem('tasks', JSON.stringify(taskContents));
}
