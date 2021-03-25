window.addEventListener("keydown", (e) => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
	audio.currentTime = 0.02;
	audio.play();
	box.classList.add("box-shadow");
});

window.addEventListener("keyup", (e) => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
	box.classList.remove("box-shadow");
	audio.currentTime = 0;
});
