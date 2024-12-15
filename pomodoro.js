const title = document.getElementsByTagName("title")[0];
const minut =  document.getElementById("minuts");
const second =  document.getElementById("seconds");
const startBtn =  document.getElementById("startBtn");
const paunzaBtn =  document.getElementById("paunzaBtn");
const back =  document.getElementById("back");

let timer;
let min = 25;
let sec = 0;
let isWork = true;

const timerToString = (n) => (n < 10) ? "0" + n : n;

const startTimer = () => {
    timer = setInterval(() => {
        sec--;
        
        if(sec == -1){
            min--;
            sec = 59;
        }

        if(min == -1){
            if(isWork){
                min = 5;

                back.classList.remove("bg-red-700");
                back.classList.add("bg-green-700");
            }else{
                min = 25;

                back.classList.add("bg-red-700");
                back.classList.remove("bg-green-700");
            }

            isWork = !isWork;
        }
        
        minut.innerHTML = timerToString(min);
        second.innerHTML = timerToString(sec);

        title.innerHTML = `${timerToString(min)} : ${timerToString(sec)} | Pomodoro`;
    }, 1000)
}
startBtn.onclick = () => startTimer();

const pauzaTimer = () => {
    clearInterval(timer);
}
pauzaBtn.onclick = () => pauzaTimer();