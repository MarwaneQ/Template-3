let countDown=new Date("Dec 31,2024 23:59:59").getTime()
let counter=setInterval(() =>{
    let datNow=new Date().getTime()
    let dateDiff= countDown - datNow; 
    let days= Math.floor(dateDiff /(1000*60*60*24))
    let hours= Math.floor((dateDiff % (1000*60*60*24))/(1000*60*60))
    let minutes= Math.floor((dateDiff % (1000*60*60))/(1000*60))
    let seconds = Math.floor((dateDiff % (1000*60))/1000)
    document.querySelector(".days").innerHTML=days
    document.querySelector(".hours").innerHTML=hours
    document.querySelector(".minutes").innerHTML=minutes
    document.querySelector(".seconds").innerHTML=seconds
    if(dateDiff<0){
        clearInterval(counter)
    }
},1000)
