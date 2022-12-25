const sc = document.querySelector('#sc');
const mn = document.querySelector('#mn');
const hr = document.querySelector('#hr');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ampm = document.querySelector('.ampm');
const years = document.querySelector('.years');
const month = document.querySelector('.month');
const days = document.querySelector('.days');

setInterval(()=>{
    let day = new Date();
    let hour = day.getHours()*30;
    let minute = day.getMinutes()*6;
    let second = day.getSeconds()*6;

    hr.style.transform=`rotateZ(${hour+(minute/12)}deg)`;
    mn.style.transform=`rotateZ(${minute}deg)`;
    sc.style.transform=`rotateZ(${second}deg)`;

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    if (h < 10){
        hours.innerHTML = '0' +h;
    }
    else{
        hours.innerHTML = h;
    }
    if (m < 10){
        minutes.innerHTML = '0'+ m;
    }
    else{
        minutes.innerHTML = m;
    }
    if (s < 10){
        seconds.innerHTML = '0' + s;
    }
    else{
        seconds.innerHTML = s;
    }
    
    if (h >=12 ){
        ampm.innerHTML ='PM'
    }
    else{
        ampm.innerHTML ='AM'
    }

    const date = new Date();
    let nowYear = date.getFullYear();
    let nowMonths = date.getMonth()+1;
    let nowDays = date.getDate();
    years.innerHTML =  nowYear
    years.style.color = 'rgb(7, 241, 7) '

    if (nowMonths < 10){
        month.innerHTML = '0'+ nowMonths
    }
    else{
        month.innerHTML =  nowMonths
    }
    month.style.color = 'yellow'

    if (nowDays < 10){
        days.innerHTML = '0' + nowDays
    }
    else{
        days.innerHTML = nowDays
    } 
    days.style.color = 'rgb(234, 5, 169)'
})
