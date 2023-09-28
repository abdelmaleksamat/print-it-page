const slides = [
	{
		image: 'slide1.jpg',
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
	},
	{
		image: 'slide2.jpg',
		tagLine:
			'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
	},
	{
		image: 'slide3.jpg',
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
	},
	{
		image: 'slide4.png',
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
	},
]
const arrowright = document.querySelector('.arrow_right')
arrowright.addEventListener('click', () => console.log('running !!!!!'))

const arrowleft = document.querySelector('.arrow_left')
arrowleft.addEventListener('click', () => console.log('running !!!!!'))

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
	showSlides((slideIndex += n))
}

function currentSlide(n) {
	showSlides((slideIndex = n))
}

function nextSlide() {
	showSlides((slideIndex += 1))
}

function previousSlide() {
	showSlides((slideIndex -= 1))
}

function currentSlide(n) {
	showSlides((slideIndex = n))
}

function showSlides(n) {
	let i
	let slides = document.getElementsByClassName('item')

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	for (let slide of slides) {
		slide.style.display = 'none'
	}
	slides[slideIndex - 1].style.display = 'flex'
}
