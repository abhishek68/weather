function but(){
   

var button=document.querySelector('.button');
var input=document.querySelector('.inputvalue');
var name=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
var speed=document.querySelector('.speed');
const api='0cc30041b0fdf4faaaa8a0deb4939f2a';

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=0cc30041b0fdf4faaaa8a0deb4939f2a')
    .then(response=>response.json())
    .then(data => {
        
        var namevalue=data['name'];
        var tempvalue =data['main']['temp'];
        var decsvalue=data['main']['humidity'];
       
        name.innerHTML="Name:"+namevalue;
        temp.innerHTML="Temperature:"+tempvalue;
        desc.innerHTML="Humidity:"+decsvalue;
       
    }).catch(err => alert("wrong"))
    var clor=document.getElementsByClassName('#clor');
    clor.style.backgroundColor="red";  
}
