import './styles/main.scss';
import generateJoke from './joke';
import caver from './assets/caver.jpg';

const caverImg = document.getElementById('caver');
caverImg.src = caver;

console.log("Hola Weypack");

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();