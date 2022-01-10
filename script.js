const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const circles = document.querySelectorAll('.circle');
const myCircles = Array.from(circles);
const progressBar = document.querySelector('.inner_progress');

//Global Variable
let countBar = 0;
let countPer = 0;

//Functions
const next = function () {
	prevBtn.disabled = false;
	if (countBar >= 0 && countBar < 3) {
		countBar++;
		countPer += 100 / 3;
		countBar === 3 && (nextBtn.disabled = true);
	}
	myCircles[countBar].classList.add('circle_active');
	progressBar.style.width = countPer + '%';
};

const prev = function () {
	nextBtn.disabled = false;
	if (countBar >= 0) {
		countBar--;
		countPer -= 100 / 3 - 0.000000001;
		countBar === 0 && (prevBtn.disabled = true);
	}
	myCircles[countBar + 1].classList.remove('circle_active');
	progressBar.style.width = countPer + '%';
};

//Event Listener
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

//Init FUnction
function init() {
	countBar === 0 && (prevBtn.disabled = true);
}
init();
