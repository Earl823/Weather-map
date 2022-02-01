
var input = document.querySelector(".inputText")
var main = document.querySelector('#name');
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')
var container = document.querySelector('.container');
var icon = document.querySelector('.icon')
var btn = document.getElementById("clk")

btn.addEventListener('click',() => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=c326d546fd9f836b9377a2bbb461efe9')
  .then(response => response.json())
  .then(data => {
  var tempValue = data['main']['temp']
  var nameValue = data['name']
  var iconImg = "http://api.openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png"
  var descValue = data['weather'][0]['description']

  main.innerHTML = nameValue
  desc.innerHTML = descValue
  temp.innerHTML = Math.floor(tempValue)+"°"
  icon.src = iconImg
  input.value ="";
  container.style.visibility = "visible"
})
})

