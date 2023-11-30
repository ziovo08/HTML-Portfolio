console.log('hello world')
// Footer 
const currentYear = new Date().getFullYear();
document.getElementById('footer').innerHTML = `Copyright © ${currentYear}  Zoe Lachica`;

//Button Alert
document.getElementById('btn-alert').onclick = () => {
    alert('Hello World!');
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