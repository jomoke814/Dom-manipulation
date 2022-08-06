//Dom manipulation
const container = document.querySelector('#container');
const p = document.createElement('p');
p.textContent = "Hey I'm red!"
p.style.cssText = "color:red;"
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!"
h3.style.cssText = "color: blue;"
const div = document.createElement('div');
div.style.cssText = "border: solid black; background-color: pink;"
const h1 = document.createElement('h1')
h1.textContent = "I'm in a Div"
div.appendChild(h1);
const newP = document.createElement('p')
newP.textContent = "Me Too!"
div.appendChild(newP);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

//event onclick from a button
const btn = document.querySelector('#btn')
btn.onclick = () => alert('Hello from Javascript file')
btn.onclick = alertFunction;
btn.addEventListener('click', function (e) {
    console.log(e.target)
})

//adding eventlistener
const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    alert('Hello...We have Added an eventListener');
})
btn2.addEventListener('click', alertFunction);
btn2.addEventListener('click', function(e){
    e.target.style.background = 'Purple';
})

// adding a named function for eventlistener
function alertFunction() {
    alert('Yay! Baby like that!')
}

//button in a node list acting like an array
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})





