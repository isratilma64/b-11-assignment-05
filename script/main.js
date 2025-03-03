
const color =["#A7C5FF", "#FF9F7F", "#80DDA3", "#FFDB6E", "#A57BD8"];
let CurrentIndex = 0;




const themeBtn = document.getElementById('themeBtn').addEventListener('click',function(){
    console.log('color clicked!');
    document.body.style.backgroundColor = color[CurrentIndex];

    CurrentIndex = (CurrentIndex + 1) % color.length;
})

function updateDayAndDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayName = days[now.getDay()];
    const convertDate = now.toLocaleDateString("en-US",{
        day: "numeric",
        month: "long",
        year:"numeric"
    })
document.getElementById('current-day').textContent = dayName;
document.getElementById('current-date').textContent = convertDate;

}
updateDayAndDate();

// complete button
// document.getElementById('complete-btn').addEventListener('click',function(){
//     alert('Board updated sucssecfully!');
//     let taskAssigned = document.getElementById('task-assigned').innerText;
//     const button = document.getElementById('complete-btn');
//     console.log(taskAssigned);
//     let currentTask = 0;
//     if(taskAssigned > 0){
//         currentTask = taskAssigned -1;

//     }
//     document.getElementById('task-assigned').innerText = currentTask;
//     console.log(taskAssigned);
//     console.log(currentTask);
//     button.setAttribute('disabled',true);

// })

// Select all 'complete-btn' buttons

document.addEventListener('DOMContentLoaded',function(){
    const completeButtons = document.querySelectorAll('#complete-btn');
    const taskAssigned = document.getElementById('task-assigned');
    const taskIncressed = document.getElementById('task-incressed');
    const historyContainer = document.getElementById('activity-history');
    const clearHistoryButton = document.getElementById('clear-history-btn');
 
    let completedTasks = 0; // Track completed tasks
    const totalTasks = completeButtons.length; // Total number of tasks

    completeButtons.forEach(button =>{
        button.addEventListener('click',function(){
            alert('Board updated successfully!');

            let task = taskAssigned.innerText;
            let taskInt = parseInt(task);
            console.log(taskInt);

            let taskDone = parseInt(taskIncressed.innerText);
            if(taskDone >0){
                taskIncressed.innerText = taskDone +1;
            }

            if(taskInt > 0){
                taskAssigned.innerHTML = taskInt -1;
            }
            button.disabled = true;

            const historyContainer = document.getElementById('activity-history');
            const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});
            console.log(currentTime);

               // **Find the task title manually by navigating the DOM**
               let taskCard = button.parentElement.parentElement; // Navigate up to the card div
               let taskTitleElement = taskCard.querySelector('h1'); // Select the task title
               let taskTitle = taskTitleElement ? taskTitleElement.innerText.trim() : 'Unknown Task';
   
        
            const p = document.createElement('p');
            p.classList.add('bg-blue-200')
            p.classList.add('p-2')
            p.classList.add('rounded-lg')
            p.classList.add('my-2')
            p.classList.add('items-center')
            p.innerText = 
            ` 
            you have completed the ${taskTitle} at ${currentTime}`
            console.log(p.innerText);
            historyContainer.appendChild(p);

            completedTasks++;
            if (completedTasks === totalTasks) {
             
                    alert("Congrats! You have completed all the current tasks!");
                } // Delay to ensure all logs are updated before alert
            
        })


    })
    clearHistoryButton.addEventListener('click', function () {
        historyContainer.innerHTML = ''; // Clear the history content
        completedTasks = 0; // Reset completed tasks count
      
    })
})

document.getElementById('discover-part').addEventListener('click',function(){
 window.location.href = "./main.html"
})


