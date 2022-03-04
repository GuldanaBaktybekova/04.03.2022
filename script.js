const darkTheme = document.querySelector('input[type=checkbox]');

darkTheme.checked = +localStorage.getItem('dark-theme');
document.body.classList.toggle('dark-theme', darkTheme.checked);

darkTheme.addEventListener('change', function(){
  localStorage.setItem('dark-theme', +darkTheme.checked);
  document.body.classList.toggle('dark-theme');
});




















// const example1span = document.querySelector('#examle-1 span');
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

