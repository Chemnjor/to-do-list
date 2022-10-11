// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
let input = document.querySelector('.enter-list')
let addB = document.querySelector('.add-task')
let tasks = document.querySelector('.tasks')

input.addEventListener('keyup', () => {

if(input.value.trim() != 0){
addB.classList.add('active')} else {
  addB.classList.remove('active')
}

})

//adding new item to the list
addB.addEventListener('click', () => {
  if (input.value.trim() !=0) {
    let newItem =document.createElement('div')
    newItem.classList.add('item')
    newItem.innerHTML =`
    <p> ${input.value}</p>
<div class="btn">
<i class="fa-sharp fa-solid fa-pen"></i>
<i class="fa-regular fa-circle-xmark"></i>
</div>
    `
    tasks.appendChild(newItem)
    input.value =''
  } else {
    alert('Please enter activity')
  }
})

// deleting item fro list
tasks.addEventListener('click', (e) => {
if (e.target.classList.contains('fa-circle-xmark')) {
  e.target.parentElement.parentElement.remove()
}
})
//marking done items
tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-pen')) 
  {
    e.target.parentElement.parentElement.classList.toggle('done')
  }
  })