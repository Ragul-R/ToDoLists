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
        let days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        
        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        
        let task = `<li><div class="step-inner"><h3>${day}  ${date.getDate()}, ${month}</h3><p>${desc}</p></div><button type="button" class="complete-btn"><span></span></button></li>`;
        
        document.getElementById('toDoList').innerHTML+= task;
        
        var completeBtn = document.getElementsByClassName('complete-btn');
        var listItem = document.getElementsByTagName('li');
        
        for(let i=0;i<completeBtn.length;i++){
            completeBtn[i].addEventListener('click',function(e){
                e.preventDefault(); 
                listItem[i].classList.toggle('completed-step');
            });
        }
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
