const h1 = document.querySelector("h1");
let interval = setInterval(() => {
  h1.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;;
}, 500);
document.querySelector("#start").addEventListener("click", function () {
  clearInterval(interval);
});
document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(interval);
});












// const span = document.querySelector("span");
// let interval = setInterval(() => {
//   span.textContent++;
// }, 1000);

// document.querySelector("button").addEventListener("click", function () {
//   clearInterval(interval);
// });

// let timeoutId;
// document.querySelector('button').addEventListener('click', function(){
//   this.textContent = "Generating...";
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(()=> {
//     this.textContent = Math.random() * 100;
//   }, 3000);
// });

// const timeoutExample = setTimeout(function() {
//   document.querySelector('span').textContent = "Hello";
// }, 3000);
// document.querySelector('button').addEventListener('click', function(){
//   clearTimeout(timeoutExample);
// });

// const darkTheme = document.querySelector('input[type=checkbox]');

// darkTheme.checked = +localStorage.getItem('dark-theme');
// document.body.classList.toggle('dark-theme', darkTheme.checked);

// darkTheme.addEventListener('change', function(){
//   localStorage.setItem('dark-theme', +darkTheme.checked);
//   document.body.classList.toggle('dark-theme');
// });

// const example1Span = document.querySelector('#examle-1 span');
// example1Span.textContent = localStorage.getItem('example-1-number') ?? 0;
// document
//   .querySelector('#example-1 button')
//   .addEventListener('click', function () {
//     example1Span.textContent++;
//     localStorage.setItem('example-1-number', example1Span.textContent);
//   });

// const example3Input = document.querySelector('#example-3 input');
// example3Input.value - localStorage.getItem('example-3-input');
// example3Input.addEventListener('input', function(){
//   localStorage.setItem('example-3-input', example3Input.value);
// });
