//
// TODO(you): Add the JavaScript necessary to complete your final project.
//

// Select the Elements
const dateElement = document.getElementById('date');
const list = document.getElementById("task-list");
const input = document.getElementById('task');

// list id
var id = 1;

// show today date
var date = new Date();
dateElement.innerHTML = date.toDateString();

function addTask(taskText)
{
    var htmlText =`<li class="task">
                        <input class="box-${id}" id="check-box" type="checkbox">
                        <span class="task-text">${taskText}</span>
                        <div class="fa fa-trash-o trash"></div>
                    </li>`;
    list.insertAdjacentHTML('beforeend', htmlText);

    let currentCheckbox = document.querySelector(".box-" + id);
    let trash = currentCheckbox.parentNode.querySelector(".trash");

    console.log("current:" + currentCheckbox);
    console.log("parent" + currentCheckbox.parentNode)
    
    currentCheckbox.addEventListener('change', () => {
        currentCheckbox.parentNode.querySelector(".task-text").classList.toggle('line');
    });
    
    trash.addEventListener('click', () => {
        currentCheckbox.parentNode.parentNode.removeChild(currentCheckbox.parentNode);
    });

    id++;
}



// const input = document.querySelector('add-list').getAttributeById('task');

document.addEventListener('keyup', (e) => {
    // to check if 'key' is enter or not
    if(e.keyCode == 13)
    {
        const text = input.value;

        if(text != "")
        {
            addTask(text);
        }
        input.value = "";

    }

});