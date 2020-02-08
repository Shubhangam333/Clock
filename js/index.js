var wakeuptime=7;
var lunchtime=12;
var noon=12;
var evening=18;
var naptime=lunchtime+2;
var partytime;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
    var meridian='AM'
    
    if(hours>=noon)
        {
            meridian='PM';
        }
    
        if(hours>noon){
            hours = hours - "12" ;
        }
        if(hours<10)
        {
          hours ="0" + hours;
        }
    
        if(minutes<10)
        {
          minutes ="0" + minutes;
        }
    
        if(seconds<10)
       {
         seconds = "0" + seconds;
       }
    var clockTime=hours+':'+minutes+':'+seconds+':'+meridian;
    clock.innerHTML=clockTime;
};

var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image= "images/bird-of-prey-eagle-feathers-1887832.jpg";

  var timeEventJS = document.getElementById('text');
  var lolimg = document.getElementById('image');
  
  if (time == partytime)
  {
    image = "images/bird-of-prey-eagle-feathers-1887832.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "images/3.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "images/4.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "images/2.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "images/4.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "images/1.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "images/1.jpg";
    messageText = "Good afternoon!";
  }
    
  
  timeEventJS.innerText = messageText;
  lolimg.src = image;
  
  showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#8B78E6";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);