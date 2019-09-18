let noRefresh=document.getElementById('taskTitle');
noRefresh.onkeypress=function(event){
    if(event.keyCode == 13){
        event.preventDefault;
        return false;
    }
}

//Show Modal
var newTaskBtn = document.getElementById('addBtn');
newTaskBtn.addEventListener('click', function () {
    let modal = document.getElementById('modal');
    modal.classList.add('show');
});

//Close Modal
var closeModal = document.getElementById('close');
closeModal.addEventListener('click', function () {
    let modal = document.getElementById('modal');
    modal.classList.remove('show');
});

//Add Task
var addTask = document.getElementById('addTask');

addTask.addEventListener('click', function () {
    addTask.preventDefault;

    let time = document.getElementById('taskTime').value;
    let desc = document.getElementById('taskTitle').value;

    if (time != "" && desc != "") {
        let date = new Date(time);
        let day;
        switch (date.getDay()) {
            case 1:
                day = 'mon';
                break;
            case 2:
                day = 'Tues';
                break;
            case 3:
                day = 'Wed';
                break;
            case 4:
                day = 'Thur';
                break;
            case 5:
                day = 'Fri';
                break;
            case 6:
                day = 'Sat';
                break;
            case 0:
                day = 'Sun';
                break;
        }
        let month;
        switch (date.getMonth()) {
            case 0:
                month = 'Jan';
                break;
            case 1:
                month = 'Feb';
                break;
            case 2:
                month = 'Mar';
                break;
            case 3:
                month = 'Apr';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'Jun';
                break;
            case 6:
                month = 'Jul';
                break;
            case 7:
                month = 'Aug';
                break;
            case 8:
                month = 'Sep';
                break;
            case 9:
                month = 'Oct';
                break;
            case 10:
                month = 'Nov';
                break;
            case 11:
                month = 'Dec';
                break;
        }
        let listElement = document.createElement('li');

        let completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');

        let listInner = document.createElement('div');
        listInner.classList.add('step-inner');

        let checkIcon = document.createElement('span')
        let taskTitle = document.createElement('h3');
        let taskDesc = document.createElement('p');
        taskDesc.append(desc);

        completeBtn.append(checkIcon);
        completeBtn.addEventListener('click', function(){
            completeBtn.preventDefault;
            listElement.classList.toggle('completed-step');
            updateCompleteBadge();
        });
        
        taskTitle.append(day, ', ', date.getDate(), ' ', month);
        listInner.append(taskTitle, taskDesc);
        listElement.append(listInner, completeBtn);
        
        
        document.getElementById('toDoList').append(listElement);

        //Badge
        updateBadge();
        updateFirstLast();
    }
});
function updateFirstLast(){
    let list = document.getElementsByTagName('li');
    list[0].classList.add('first');
    for(let i = 1; i<=list.length-1;i++){
        list[i].classList.remove('last');
        if(i==list.length-1){
            list[i].classList.add('last');
        }
    }
}
function updateBadge(){
    let list = document.getElementsByTagName('li');
    let badge = document.getElementById('badge');
    badge.innerHTML = list.length;
    badge.style.opacity = 1;
}
function updateCompleteBadge(){
    let completeStep = document.getElementsByClassName('completed-step').length;
    let list = document.getElementsByTagName('li').length;
    let badge = document.getElementById('badge'); 
    badge.innerHTML =list - completeStep;
}
window.onclick = function(event){
    if(event.target == modal){
        let modal = document.getElementById('modal');
        modal.classList.remove('show');
    }
}
