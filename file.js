console.log('hello world')
// Footer 
const currentYear = new Date().getFullYear();
document.getElementById('footer').innerHTML = `Copyright © ${currentYear}  Zoe Lachica`;

//Button Alert
document.getElementById('btn-alert').onclick = () => {
    alert('Thanks for pressing!');
};

//Hover
const hoverButton = document.getElementById('btn-alert');
hoverButton.onmouseover = () => {
    hoverButton.innerText = 'New Button Label';
};

hoverButton.onmouseleave = () => {
    hoverButton.innerText = 'Click me!';
};

//Button Increment
let count = 1;
document.getElementById('btn-counter').onclick = () => {
    count = count + 1;
    document.getElementById('txt-counter').innerHTML = count;
    //Odd or Even 
    const isEven = count % 2 === 0;
    const counterElement = document.getElementById('txt-counter');
    counterElement.classList.remove('even', 'odd');
    counterElement.classList.add(isEven ? 'even' : 'odd');
};

//Loops
const numbersList = document.getElementById('numbers');
for (let i = 1; i <= 100; i = i + 1) 
{
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    numbersList.appendChild(listItem);
};


    