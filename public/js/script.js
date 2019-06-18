//
// TODO(you): Add the JavaScript necessary to complete your final project.
//

const list = document.querySelector("task-list");

function addTask(taskItem)
{
    // const htmlText =`<li class="task">
    //                         <div id="check-box"></div>
    //                         <span id="task-text"></span>
    //                         <div id="trash"></div>
    //                  </li>`

    list = document.createElement('li');
    list.classList.add('task');
    
    const checkBox = document.createElement('div');
    checkBox.classList.add('check-box');

    const text = document.createElement('p');
    text.textContent = taskItem;
    text.classList.add('task-text');

    const trash = document.createElement('div');
    trash.classList.add('trash');

    list.appendChild(checkBox);
    list.appendChild(text);
    list.appendChild(trash);
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