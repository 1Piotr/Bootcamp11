// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  myName = document.getElementById('myName'),
  myFocus = document.getElementById('myFocus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('img/evening.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('myName') === null) {
    myName.textContent = '[Enter Name]';
  } else {
    myName.textContent = localStorage.getItem('myName');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('myName', e.target.innerText);
      myName.blur();
    }
  } else {
    localStorage.setItem('myName', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('myFocus') === null) {
    myFocus.textContent = '[Enter Focus]';
  } else {
    myFocus.textContent = localStorage.getItem('myFocus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('myFocus', e.target.innerText);
      myFocus.blur();
    }
  } else {
    localStorage.setItem('myFocus', e.target.innerText);
  }
}

myName.addEventListener('keypress', setName);
myName.addEventListener('blur', setName);
myFocus.addEventListener('keypress', setFocus);
myFocus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
