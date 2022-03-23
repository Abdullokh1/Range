const elFirstInput = document.getElementById('firstInput');
const Form = document.getElementById('form');
const range = document.querySelectorAll('.range');
const allInput = document.querySelectorAll('.form-control');




allInput.forEach((el, index) => {
  el.addEventListener('keyup', (e)=>{
    range[index].style.width = `${e.target.value.length}%`;
    range[index].textContent = `${e.target.value.length}%`;
  })
})
