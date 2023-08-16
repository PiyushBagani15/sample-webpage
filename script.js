const clickButton = document.getElementById('clickButton');
const countElement = document.getElementById('count');

let count = 0;

clickButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});
