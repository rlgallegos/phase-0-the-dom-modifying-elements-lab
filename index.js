const main = document.getElementById('main');
main.remove();

//create newHeader variable and append
const newHeader = document.createElement('h1');

//input id
newHeader.id = 'victory';

//add text
newHeader.textContent = 'Bobby is the champion';