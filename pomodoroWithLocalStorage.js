const title = document.getElementsByTagName("title")[0];
const minut =  document.getElementById("minuts");
const second =  document.getElementById("seconds");
const startBtn =  document.getElementById("startBtn");
const paunzaBtn =  document.getElementById("paunzaBtn");
const clearBtn =  document.getElementById("clearBtn");
const back =  document.getElementById("back");

let timer;

let min = +localStorage.getItem("minut") || 25;
let sec = +localStorage.getItem("second") || 0;

let isWork = (localStorage.getItem("isWork")) == true;


// returns 0 when the minute or second is a single digit
const timerToString = (n) => (n < 10) ? "0" + n : n;


// outputs the minutes to the UI and adds a timer to the title
const changeUI = () => {
    minut.innerHTML = timerToString(min);
    second.innerHTML = timerToString(sec);
    
    title.innerHTML = `${timerToString(min)} : ${timerToString(sec)} | Pomodoro`;
    
    localStorage.setItem("minut", min);
    localStorage.setItem("second", sec);
};
changeUI();


// changes the background when there is work or when there is a break
const changeWork = (isMin) => {
    if(isWork == true){
        if(isMin) min = 4;
        
        back.classList.remove("bg-red-700");
        back.classList.add("bg-green-700");
    }else{
        if(isMin) min = 24;
        
        back.classList.add("bg-red-700");
        back.classList.remove("bg-green-700");
    };
};
changeWork(false);


// uses a timer
const startTimer = () => {
    if(!timer){
        timer = setInterval(() => {
            sec--;
            
            if(sec == -1){
                min--;
                sec = 10;
            }
    
            if(min == -1){
                isWork = !isWork;
                
                changeWork(true);
                localStorage.setItem("isWork", isWork)
            };
            
            changeUI();
        }, 1000);
    }
}
startBtn.onclick = () => startTimer();


// stops the timer
const pauzaTimer = () => {
    clearInterval(timer);
    timer = undefined;
}
pauzaBtn.onclick = () => pauzaTimer();


// clears the timer
const clearTimer = () => {
    pauzaTimer();
    isWork = false;
    localStorage.setItem("isWork", isWork);
    min = 25;
    sec = 59;
    changeWork(true);
    changeUI();
}
clearBtn.onclick = () => clearTimer();