let today = new Date()
let day  =today.getDay();
let dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log('Today is '+dayList)
let hours = today.getHours()
let minute = today.getMinutes()
let second = today.getSeconds()
let prepand = (hours >=12)? "PM" : "AM"
hours = (hours >=12)?hours-12:hours;
if(hours ===0 && prepand ==="PM"){
  if(minute ===0 &&second ===0){
    hours = 12;
    prepand ="None"
  }else{
    hours =12;
    prepand ="PM"
  }
}

if(hours ===0 && prepand ==="AM"){
  if(minute ===0 && second ===0){
    hours = 12;
    prepand="Midnight"
  }else{
    hours = 12;
    prepand ="AM"
  }
}

document.write("Current Time : "+hours + prepand + " : " + minute + " : " + second);